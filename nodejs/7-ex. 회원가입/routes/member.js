import express from 'express';
import pool from '../db.js';
const router = express.Router();
router.get('/form', (req, res) => {
  res.render('form');
});
router.post('/form', async (req, res) => {
  const { name, email } = req.body;
  console.log(name,email);//html의 입력 정보가 서버로 전달되는가?
  
  try {
    const sql2 = 'SELECT 1 FROM member WHERE email=?'
const [result2] = await pool.query(sql2,[email]);
// console.log(`result2=${result2}`)
if(result2.length > 0){//가입된 이메일 있음
  // console.log('중복')
  res.render('result',{success:false,msg:'이메일 중복'});
  return;
}
    const sql = 'INSERT INTO member (name, email) VALUES (?, ?)';
    const [result] = await pool.query(sql, [name, email]);
    res.render('result', { success: true, id: result.insertId });
  } catch (e) {
    console.error('회원 등록 실패:', e.message);
    res.render('result', { success: false });
  }
});
export default router;