import express from 'express';
import {  Register,login } from '../controller/Usercontroller.js';

const router = express.Router();

router.post('/register', Register);
router.post('/login', login);
export default router;
