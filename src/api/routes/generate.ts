
import { Router } from 'express';
import { generateContent } from '../controllers/generate';
import { protect } from '../middleware/auth';

const router = Router();

router.post('/', protect, generateContent);

export default router;
