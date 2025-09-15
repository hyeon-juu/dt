import http from 'http';
import url from 'url';
import express from 'express';



// const server = http.createServer((req, res) => {

//     if (req.method === 'GET') {
//         const parsedUrl = url.parse(req.url, true); 
//         const pathname = parsedUrl.pathname;
//         const query = parsedUrl.query;

//         if (pathname === '/search') {
//             const q = query.q ;
//             res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
//             res.end(`<h2>${q} 검색 완료</h2>`);
//         } else {
//             res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf8' });
//             res.end('페이지를 찾을 수 없습니다.');
//         }
//     } else {
//         res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf8' });
//         res.end('GET 메서드만 허용됩니다.');
//     }
// });
// server.listen(3001, () => {
//     console.log('GET 서버 실행 중: http://localhost:3000');

// });
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/search',(req,res)=>{
    const q = req.query.q;
    // const {q} = req.query; 같은 의미
    res.send(`${q}검색완료`)
})


// app.use(express.urlencoded());
app.post('/signup', (req, res) => {
    const { name,age } = req.body;
    res.send(`<h2>${name} 님(${age}세), 회원가입 완료!</h2>
`);
});

// const app = express();
// app.use(express.json());

app.post('/profile', (req, res) => {
    const { name, age } = req.body;
    res.json({ message: `${name}(${age}세) 프로필 등록 완료` });
});

app.listen(3000);