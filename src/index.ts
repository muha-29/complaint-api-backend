import 'dotenv/config';
import express from 'express';
import issuesRouter from './api/routes/issues';
import authRouter from './api/routes/auth';
import generateRouter from './api/routes/generate';
import { errorHandler } from './api/middleware/errorHandler';
import connectDB from './config/db';

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(express.json());

app.use('/api/issues', issuesRouter);
app.use('/api/auth', authRouter);
app.use('/api/generate', generateRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
