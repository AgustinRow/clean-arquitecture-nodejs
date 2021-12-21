import express from 'express';
import { createDreamControllerInstance } from '../../../controllers/dream';
import Base from '../executeHelper';


const router = express.Router();

router.post('/', Base.execute(createDreamControllerInstance));
router.get('/');

export default router;
