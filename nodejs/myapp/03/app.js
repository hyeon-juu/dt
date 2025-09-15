import express from 'express';
import { logger } from './middleware/logger.js';
import { logger_ip } from './middleware/logger-ip.js';
//default 있으면 중괄호 사용 안 함
import userRouter from './routes/user.js';
const app = express();

// app.use(() => {
//     console.log('middleware..');
// });

app.use(logger);
app.use(logger_ip);

app.use('/user',userRouter);


//주소별로 라우팅
app.get('/', (req, res) => {
    res.status(200).type('html').send('<h1>Hello, Express!</h1>');
});

app.listen(3000, () => {
    console.log('http://localhost:3000 실행 중');
});
