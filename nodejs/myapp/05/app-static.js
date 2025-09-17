import express from 'express';
import path from 'path';
const __dirname = import.meta.dirname;
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// 정적 파일 폴더 등록 (public 디렉토리)
app.use(express.static(path.join(__dirname, 'public')));//현재 위치의 public 폴더
// app.use(express.static(path.join(__dirname, '../public')));//상위 위치의 public 폴더
app.get('/static', (req, res) => {
    res.render('static');
});
app.listen(3000, () => {
    console.log('서버 실행 중: http://localhost:3000');
});