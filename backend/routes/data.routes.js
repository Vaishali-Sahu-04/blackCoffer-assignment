import express from 'express';
import { getAllData } from '../controllers/data.controller.js';

const router = express.Router();

// Get all data
router.get('/', getAllData);

export default router;
