const url = "https://example.com/page?id=123&name=kim";

// 프로토콜 추출(파싱)
// const protocol = url.substring(0, 5);
const protocol = url.substring(0, url.indexOf("://"));

// 도메인 추출
// const domain = url.substring(8, 19);
const domain = url.substring(url.indexOf("://") + 3, url.indexOf("/page?"));

// 파라미터 추출
const params = url.slice(-15, url.length);

console.log(`프로토콜: ${protocol}\n도메인: ${domain}\n파라미터: ${params}`);

//path
const path = url.substring(20, 24);
console.log(`경로:${path}`);

// const urll = new URL(url);
// console.log(urll.hostname);
