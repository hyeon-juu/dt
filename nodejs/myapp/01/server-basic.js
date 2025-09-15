
import http from 'node:http';
import url from 'node:url';

const server = http.createServer((req,res)=>{
    // console.log(req.method);
    // console.log(req.url);//?id=a&pw=1
    //id 값 pw 값 어떻게 얻어오냐
    const url객체 = url.parse(req.url, true);//url 객체 형태를 만들어줌
    console.log(url객체);
    const id = url객체.query.id;
    const pw = url객체.query.pw;
    const path = url객체.pathname;
    console.log(id,pw);
    res.setHeader('content-type','text/plain; charset=utf8');
    res.end(`path=${path}, id=${id}, pw:${pw} !`)
    
    // res.setHeader('Content-type','text/html;charset=utf8');
    // res.setHeader('Content-type','application/json;charset=utf8');
    // res.setHeader('Content-type','video/mp4;charset=utf8');
    // const obj = {'id':'abcd','pw':'1234'}
    // res.end(JSON.stringify(obj));
    
});

server.listen(3000);

//get post 나누는 이유
//RESTful 지키려고