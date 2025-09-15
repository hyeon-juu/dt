import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('post main');
});

router.get('/:num', (req, res) => {
    const num = req.params.num;
    res.send(`${num}번 게시물`);
});
export default router;