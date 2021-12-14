import express from 'express';
import { createDreamControllerInstance } from '../../../controllers/dream';

const router = express.Router();

router.post('/', createDreamController);
router.get('/');

export default router;
