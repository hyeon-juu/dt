import http from 'http';
import url from 'url';



const server = http.createServer((req, res) => {
//req.url을 그냥 사용한 경우 -> 문제가 발생할 가능성 높음
//localhost:3000/news -> /news
//localhost:3000/post?id=z -> /post?id=z
const parsed = url.parse(req.url,true);
const pathname = parsed.pathname; //순수한 경로
const query = parsed.query; //? 뒤의 키와 값
console.log(pathname);
console.log(query);

if(pathname=='/hello'){
    //req.url 사용하면 /hello?a=1 같은건 처리 안됨

    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
    res.end('완료');
}else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf8' });
    res.end('존재하지 않는 주소');
}



});

server.listen(3000, () => {
console.log('POST 서버 실행 중: http://localhost:3000');
});
