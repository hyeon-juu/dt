import express from 'express';
const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('<h2>안녕하세요 nodejs님!</h2>');
// });

// GET /user/:name → 이름을 경로에서 받기
router.get('/:name', (req, res) => {
    const name = req.params.name;
    res.send(`<h2>안녕하세요 ${name}님!</h2>`);
});

export default router;