import mysql from 'mysql2/promise';

//데이터베이스에 연결하기
const pool = mysql.createPool({
 host: 'localhost',
 user: 'root',
 password: '1234',
 database: 'Unnamed',
 waitForConnections: true,
 connectionLimit: 10,
 })

//테이블의 데이터를 조회하기
//await pool.query('select * from 고객') //비동기 -> then await
const getUsers = async () => {
try {
 const [rows] = await pool.query('SELECT * FROM 고객');
 console.log(rows);
 } catch (e) {
 console.error('조회 실패:', e.message);
 } finally {
 await pool.end();
 console.log('풀 종료');
 }
};


//조회한 데이터 출력하기
getUsers();


//데이터베이스 연결 해제하기
pool.end();