import express from 'express';
import mysql from 'mysql2/promise';
import { pool, getUnits } from '../db.js'
const router = express.Router();



router.get('/21', async (req, res) => {
    const rows = await getUnits();
    res.json(rows);
});


export default router;