import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: 'localhost', user: 'root', password: '1234', database: 'mydb',
    port: 3307,
    waitForConnections: true, connectionLimit: 10,
})
export const getUnits = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM assembly_member WHERE units like "%21%"');
        console.log(rows);
        return rows;
        // res.json(rows);
    } catch (e) {
        console.error('조회 실패:', e.message);
    }
};