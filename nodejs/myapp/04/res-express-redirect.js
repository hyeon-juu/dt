import express from 'express';
const app = express();
app.get('/old', (req, res) => {
    res.redirect('/new');
});
app.get('/new', (req, res) => {
    res.send('<h2>여기는 새로운 페이지입니다.</h2>');
});
app.listen(3000, () => {
    console.log('http://localhost:3000/old → /new로 리다이렉트됨');
});