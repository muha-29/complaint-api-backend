
import { Request, Response, NextFunction } from 'express-serve-static-core';
import * as issueService from '../services/issues';

interface AuthenticatedRequest extends Request {
  user?: any;
  body: any;
}

export const createIssue = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const issue = await issueService.createIssue(req.body, req.user.id);
    res.status(201).json(issue);
  } catch (error) {
    next(error);
  }
};

export const getIssues = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const issues = await issueService.getAllIssues(req.query);
    res.json(issues);
  } catch (error) {
    next(error);
  }
};

export const getIssueById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const issue = await issueService.getIssueById(req.params.id);
    if (issue) {
      res.json(issue);
    } else {
      res.status(404).json({ message: 'Issue not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const updateIssue = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const issue = await issueService.updateIssueStatus(id, status);
    if (issue) {
      res.json(issue);
    } else {
      res.status(404).json({ message: 'Issue not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const getIssuesByUser = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const issues = await issueService.getIssuesByUserId(req.user.id);
    res.json(issues);
  } catch (error) {
    next(error);
  }
};
