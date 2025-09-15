import http from 'http';
import url from 'url';
import mysql from 'mysql2/promise';

const pool = mysql.createPool({  // ① 데이터베이스 연결
  host: 'localhost', user: 'root', password: '1234', database: 'mydb', port:3307,
  waitForConnections: true, connectionLimit: 10,
})

const saveUser = async (id,name,age) => {
  try {
    const [rows] = await pool.query(
        'INSERT INTO 고객 (고객아이디, 이름, 나이) VALUES(?,?,?)',[id, name, age]);  // ② SQL 실행
    console.log(rows);  // ③ 실행결과 출력
  } catch (e) {
    console.error('삽입 실패:', e.message);
  }
  // } finally {
  //   await pool.end();  // ④ 데이터베이스 연결 해제
  // }
};



const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf8');
const url객체 = url.parse(req.url,true);
const query = url객체.query;
const id = query.id;
const name = query.name;
const age = query.age;
//db에 insert
saveUser(id,name,age);
res.end('등록 완료');
});
server.listen(3000, () => {
console.log('POST 서버 실행 중: http://localhost:3000');
});
