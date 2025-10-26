
import Issue, { IIssue } from '../models/issue';

export const createIssue = async (issueData: any, userId: string): Promise<IIssue> => {
  const { title, description, location, photoUrl } = issueData;
  const issue = new Issue({
    title,
    description,
    photoUrl,
    location: {
      type: 'Point',
      coordinates: [location.lng, location.lat],
    },
    user: userId,
  });
  return issue.save();
};

export const getAllIssues = async (query: any): Promise<IIssue[]> => {
  if (query.lat && query.lng) {
    const { lat, lng, radius } = query;
    return Issue.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)],
          },
          $maxDistance: parseFloat(radius) * 1000, // in meters
        },
      },
    });
  }
  return Issue.find();
};

export const getIssueById = async (id: string): Promise<IIssue | null> => {
  return Issue.findById(id);
};

export const updateIssueStatus = async (id: string, status: 'Pending' | 'In Progress' | 'Resolved'): Promise<IIssue | null> => {
  return Issue.findByIdAndUpdate(id, { status }, { new: true });
};

export const getIssuesByUserId = async (userId: string): Promise<IIssue[]> => {
  return Issue.find({ user: userId });
};
