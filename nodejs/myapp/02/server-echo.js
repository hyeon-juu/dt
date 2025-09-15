import http from 'http';
import url from 'url';
import { handleEcho } from './echo.js';

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); // true → 객체로 파싱
    //  console.log(parsedUrl);

    const pathname = parsedUrl.pathname;
    // console.log(pathname);

    const query = parsedUrl.query;
    if (pathname === '/echo') {
        handleEcho(req, res, query);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf8' });
        res.end('페이지를 찾을 수 없습니다');
    }


});
server.listen(3000, () => {
    console.log('GET 서버 실행 중: http://localhost:3000');
});