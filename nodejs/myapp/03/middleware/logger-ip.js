
//미들웨어로 사용될 함수
export function logger_ip(req, res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    //ip 확인 코드 나중에 작성

    // 사용자가 접속하면 사용자 ip주소 로그로 남기는 미들웨어
    const ip = req.ip;
    console.log(ip);
    // res.status(403).send('접근불가');
    next(); // 다음 미들웨어로 이동
}



// IP 주소
// req.ip → Express가 알아서 계산한 클라이언트 IP
// req.ips → trust proxy가 켜져 있을 때, 프록시를 거친 모든 IP 배열
// req.headers['x-forwarded-for'] → 직접 헤더에서 꺼내는 방식 (프록시 환경)

// 경로 / URL
// req.path → /user/123 같은 경로
// req.url → /user/123?sort=asc (쿼리스트링 포함)
// req.originalUrl → 미들웨어 체인에서 변경되기 전 원본 URL

// HTTP 관련 정보
// req.method → GET, POST, PUT …
// req.protocol → http / https
// req.headers → 요청 헤더 전체

// 데이터
// req.query → ?name=hj 같은 쿼리스트링 파라미터
// req.params → /user/:id 라우터 파라미터
// req.body → POST/PUT 요청 시 전송된 body (body-parser 사용 시)