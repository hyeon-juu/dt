export function handleRoute(req, res) {
    if (req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
        res.end('안녕하세요!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf8' });
        res.end('해당 경로를 찾을 수 없습니다');
    }
}


//req.url 사용하면 /hello?a=1 같은건 처리 안됨
//url.parse pathname으로 if문 사용 하면 ?뒤 처리 가능