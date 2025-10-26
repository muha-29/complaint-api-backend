
import request from 'supertest';
import express from 'express';
import issuesRouter from '../api/routes/issues';
import * as db from './test-setup';
import Issue from '../api/models/issue';

const app = express();
app.use(express.json());
app.use('/api/issues', issuesRouter);

beforeAll(async () => {
  await db.connect();
});

afterAll(async () => {
  await db.closeDatabase();
});

afterEach(async () => {
  await db.clearDatabase();
});

describe('GET /api/issues', () => {
  it('should return 200 OK and an array of issues', async () => {
    const res = await request(app).get('/api/issues');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return issues within a given radius', async () => {
    // Create an issue within the search radius
    await Issue.create({
      title: 'Test Issue',
      description: 'A test issue',
      location: { type: 'Point', coordinates: [-73.99, 40.73] }, // New York
    });

    // Create an issue outside the search radius
    await Issue.create({
      title: 'Distant Issue',
      description: 'An issue far away',
      location: { type: 'Point', coordinates: [-118.24, 34.05] }, // Los Angeles
    });

    const lat = 40.7128;
    const lng = -74.006;
    const radius = 10; // 10 km

    const res = await request(app).get(`/api/issues?lat=${lat}&lng=${lng}&radius=${radius}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].title).toBe('Test Issue');
  });
});

describe('POST /api/issues', () => {
  it('should create a new issue', async () => {
    const newIssue = {
      title: 'My New Issue',
      description: 'This is a brand new issue.',
    };
    const res = await request(app)
      .post('/api/issues')
      .send(newIssue);
    
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toBe(newIssue.title);
  });
});
