import express from 'express';
import { createDreamControllerInstance } from '../../../controllers/dream';

const router = express.Router();

router.post('/', createDreamControllerInstance);
router.get('/');

export default router;
