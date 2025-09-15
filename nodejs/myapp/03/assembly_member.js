import express from 'express';
import unitRouter from './routes/a_member.js';
import nameRouter from './routes/n_member.js';
import districtRouter from './routes/d_member.js';
import mysql from 'mysql2/promise';


const pool = mysql.createPool({
    host: 'localhost', user: 'root', password: '1234', database: 'mydb',
    port: 3307,
    waitForConnections: true, connectionLimit: 10,
})

const getUsers = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM assembly_member limit 50');
        // console.log(rows);
        return rows;
    } catch (e) {
        console.error('조회 실패:', e.message);
    }
};
// getUsers();


const app = express();
const rows = await getUsers();
//use라는 미들웨어 사용
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/unit', unitRouter);
app.use('/name', nameRouter);
app.use('/distict', districtRouter);

app.get('/', (req, res) => {
    res.json(rows);
});
app.listen(3000, () => {
    console.log('http://localhost:3000 서버 실행 중');
});



