
import { Router } from 'express';
import { createIssue, getIssues, getIssueById, updateIssue, getIssuesByUser } from '../controllers/issues';
import { protect } from '../middleware/auth';

const router = Router();

router.post('/', protect, createIssue);
router.get('/', getIssues);
router.get('/my-issues', protect, getIssuesByUser);
router.get('/:id', getIssueById);
router.put('/:id', protect, updateIssue);

export default router;
