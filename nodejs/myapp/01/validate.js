import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
  try {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (req.method === 'GET' && pathname === '/add') {
      const x = query.x;
      const y = query.y;

      if (isNaN(Number(x)) || isNaN(Number(y))) {
        res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf8' });
        res.end('400 Bad Request');
      } else {
        const sum = Number(x) + Number(y);
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
        res.end(`결과: ${sum}`);
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf8' });
      res.end('404 Not Found');
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf8' });
    res.end('서버 내부 오류');
  }
});

server.listen(3000, () => {
  console.log('서버 실행 중: http://localhost:3000');
});
