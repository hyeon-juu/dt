import express from 'express';
import greetRouter from './routes/greet.js';
const app = express();


app.use('/greet',greetRouter);


//주소별로 라우팅
app.get('/', (req, res) => {
    res.status(404).type('html').send('<h1>404 이름 없는 경로</h1>');
});

app.listen(3000, () => {
    console.log('http://localhost:3000 실행 중');
});
