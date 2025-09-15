export function logger(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    //ip 확인 코드 나중에 작성
    // res.status(403).send('접근불가');
    next(); // 다음 미들웨어로 이동
}