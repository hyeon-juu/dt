import express from 'express';
const app = express();
app.use(express.json());

app.post('/json', (req, res) => {
    const { name, age } = req.body;
    res.json({ message: `name: ${name} / age: ${age}` });
});
app.listen(3000);
//json으로 요청할 땐 text-json
//content-type도 json으로 해야함