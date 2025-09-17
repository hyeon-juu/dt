import mysql from 'mysql2/promise';

const pool = mysql.createPool({
 host: 'localhost', user: 'root', password: '1234',
 database: 'mydb', port : 3307,
 waitForConnections: true, connectionLimit: 10,
 });
//  const [rows] = await pool.query('SELECT * FROM users');
//  await pool.end(); // 모든 연결을 종료하고 이벤트 루프에서 풀 제거
//  console.log(rows)

const leakTest = async () => {
    const connections = [];
    for (let i = 0; i < 200; i++) {
        try {
            // const conn = await mysql.createConnection({
            //     host: 'localhost',
            //     user: 'root',
            //     password: '1234',
            //     database: 'mydb',
            //     port : 3307
            // });

            // connections.push(conn); // 종료하지 않고 배열에 저장만
                pool.query('select 1')
            console.log(`연결 ${i + 1}번 성공`);
        } catch (e) {
            console.error(`연결 ${i + 1}번 실패:`, e.message);

            break;
        }
    }
};
leakTest();