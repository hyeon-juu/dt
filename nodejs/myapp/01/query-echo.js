import http from 'http';
import url from 'url';
const server = http.createServer((req, res) => {

console.log(req.url);

// if (req.method === 'GET') {
 const parsedUrl = url.parse(req.url, true); // true → 객체로 파싱
//  console.log(parsedUrl);

 const pathname = parsedUrl.pathname;
// console.log(pathname);

 const query = parsedUrl.query;
// console.log(query);

const city = query.city ;
const weather = query.weather ;
// res.writeHead(200, { 'Content-Type': 'application/json; charset=utf8' });
res.setHeader('content-type','text/plain; charset=utf8');
const obj = {'city': `${city}`, 'weather': `${weather}`};
res.end(JSON.stringify(obj));
//  if (pathname === '/') {
//  } 
//  else {
//     res.writeHead(404, { 'Content-Type': 'application/json; charset=utf8' });
//     res.end('페이지를 찾을 수 없습니다');
//  }
//  } else {
//     res.writeHead(405, { 'Content-Type': 'application/json; charset=utf8' });
//     res.end('GET 요청만 허용됩니다');
//  }
});
server.listen(3000, () => {
console.log('GET 서버 실행 중: http://localhost:3000');
});