import express from 'express';
import path from 'node:path';

const app = express();


app.get('/down1', (req, res) => {
    // res.download('c://file/download')
    //현재 경로 확인하기
    console.log(process.cwd())
    console.log(path.resolve())//프로젝트 경로
    // console.log(import.meta.dirname)//실행되는 파일의 경로
    // res.download(path.resolve() + "/public/example.txt");
    //node를 실행한 위치
    
    
    res.download(path.join(path.resolve(),'./myapp/public/example.txt'))
    // res.download(path.join(__dirname,'public','example.txt'))
    // res.send("1");
})

app.get('/down2',(req,res)=>{
    res.sendFile(path.join(path.resolve(),
'myapp/public','example.txt'))
})

app.get('/', (req, res) => {
    const data = { "name": "nodejs", "age": 10 };
    //  res.send(data);
    res.json(data);//send 대신 json
});
app.listen(3000);