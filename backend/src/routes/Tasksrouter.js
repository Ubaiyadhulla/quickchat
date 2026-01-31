import express from 'express';
import { createTask } from '../controller/Taskscontroller.js';
import { AuthUser } from '../middleware/Auth.js';
import { getTasks } from '../controller/Taskscontroller.js';

const router = express.Router();

router.post('/tasks', AuthUser, createTask);
router.get('/tasks', AuthUser, getTasks);
export default router;