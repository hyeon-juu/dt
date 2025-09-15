import http from 'http';
import url from 'url';
import mysql from 'mysql2/promise';
import { stringify } from 'querystring';

const pool = mysql.createPool({  // ① 데이터베이스 연결
  host: 'localhost', user: 'root', password: '1234', database: 'mydb', port:3307,
  waitForConnections: true, connectionLimit: 10,
})

//조회할 때 조건이 없으므로 함수의 매개변수도 없다.
//비동기 함수
const getUsers = async (search) => {
  try {
    const [rows] = await pool.query(
        // `SELECT 고객아이디, 이름, 나이, 등급, 직업, 적립금 FROM 고객 WHERE 이름 = ? OR 직업=?`,[search,search]);  // ② SQL 실행
        `SELECT 고객아이디, 이름, 나이, 등급, 직업, 적립금 FROM 고객 WHERE 이름 LIKE ? OR 직업 LIKE ?`,[`%${search}%`,`%${search}%`]);  // ② SQL 실행
    //WHERE 이름 LIKE CONCAT('%', ?, '%') OR 직업 LIKE CONCAT('%', ?, '%')
        console.log(rows);  // ③ 실행결과 출력
    return rows;
  } catch (e) {
    console.error('조회 실패:', e.message);
  }
  // } finally {
  //   await pool.end();  // ④ 데이터베이스 연결 해제
  // }
};



const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json;');
  const obj = url.parse(req.url,true);
  const query = obj.query;
  const search = query.search;

  const rows = await getUsers(search);
    res.end(JSON.stringify(rows));
    //end 뒤에는 배열이나 객체 안됨. 문장만 써야함
});
server.listen(3000, () => {
console.log('POST 서버 실행 중: http://localhost:3000');
});
