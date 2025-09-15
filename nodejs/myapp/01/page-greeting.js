import http from 'http';


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf8');

if (req.method === 'POST') {
    //post는 data라는 이벤트와 end라는 이벤트가 사용된다.
    let body = '';

    req.on('data', chunk => {// 데이터가 서버로 전송되어 올 때
        body += chunk; //name=park
    });


    req.on('end',()=>{
        //body   name=park
        const name = body.split('=')[1];
        if(req.url == '/hello'){
            if(name){
                res.end(`${name}님 반갑습니다.`)
            }else{
                res.end('누구신가요?');
            }
        }else{
            res.end('/hello로 접속해주세요')
        }
    })
    
 } else {
    
    res.end('POST 요청만 허용됩니다');
 }
});
server.listen(3000, () => {
console.log('POST 서버 실행 중: http://localhost:3000');
});
