import http from 'node:http';
import { add, notadd } from './calculator.js';

// console.log(add(5, 2))
// console.log(notadd(3, 2))

const server = http.createServer((req, res) => {
    const name = 'nodejs';
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
    // res.end(`${add(5, 2)}`);
    res.end(`${notadd(5, 2)}`);
});
server.listen(3000, () => {
    console.log('http://localhost:3000 에서 인사 메시지를 확인하세요');
});