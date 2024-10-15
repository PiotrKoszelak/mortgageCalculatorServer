import express from 'express';

import { post } from '../controllers/calculate';

const router = express.Router();

router.post('/', post);

export default router;
