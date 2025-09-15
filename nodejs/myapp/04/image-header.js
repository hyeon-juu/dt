import express from 'express';
import path from 'node:path';
import fs from 'node:fs';


const app = express();



app.get('/download', (req, res) => {

    console.log(process.cwd())
    console.log(path.resolve())//프로젝트 경로
    res.download(path.join(path.resolve(),'./myapp/public/p.png'))

})

// app.get('/image',(req,res)=>{
//     res.sendFile(path.join(path.resolve(),
// 'myapp/public','p.png'))
// })

app.get('/image', (req, res) => {
    const filePath = path.join( import.meta.dirname, '../myapp/public','p.png' );
    res.sendFile( filePath );
    // res.set('Content-Type', 'image/png'); 
    // const stream = fs.createReadStream(path.join(path.resolve(),'./myapp/public/p.png'));
    // stream.pipe(res);
});

app.listen(3000);