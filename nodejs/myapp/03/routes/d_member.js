import express from 'express';
import mysql from 'mysql2/promise';
const router = express.Router();

const pool = mysql.createPool({
    host: 'localhost', user: 'root', password: '1234', database: 'mydb',
    port: 3307,
    waitForConnections: true, connectionLimit: 10,
})

// export async function get(){}
const getDist = async (dist) => {
    try {
        // const [rows] = await pool.query('SELECT * FROM assembly_member WHERE orig_nm like ?', [`%${dist}%`]);
        const [rows] = await pool.query("SELECT * FROM assembly_member WHERE orig_nm like CONCAT('%',?,'%')", [dist]);
        console.log(rows);
        return rows;
    } catch (e) {
        console.error('조회 실패:', e.message);
    }
};

router.get('/:dist', async (req, res) => {
    const dist = req.params.dist;
    const rows = await getDist(dist);
    res.json(rows);
});


export default router;