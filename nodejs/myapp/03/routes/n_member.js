import express from 'express';
import mysql from 'mysql2/promise';
const router = express.Router();

const pool = mysql.createPool({
    host: 'localhost', user: 'root', password: '1234', database: 'mydb',
    port: 3307,
    waitForConnections: true, connectionLimit: 10,
})
const getName = async (name) => {
    try {
        const [rows] = await pool.query('SELECT * FROM assembly_member WHERE hg_nm like ?', [`%${name}%`]);
        console.log(rows);
        return rows;
    } catch (e) {
        console.error('조회 실패:', e.message);
    }
};

router.get('/:name', async (req, res) => {
    const name = req.params.name;
    const rows = await getName(name);
    res.json(rows);
});


export default router;