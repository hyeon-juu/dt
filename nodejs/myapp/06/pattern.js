const response = await fetch('http://ggoreb.com/quiz/pattern.html');
 const data = await response.text();

 const idx = data.lastIndexOf('<!--');

 const text = data.substring(idx);// 코드 작성
 const regex = /[^A-Z][A-Z]{3}([a-z]{1})[A-Z]{3}[^A-Z]/g; //코드 작성
 //[^A-Z] ^는 부정의 의미
//  const result = text.match(regex)// match는 안됨
const result = [...text.matchAll(regex)].map(m=>m[1]);
 console.log(result.join(''));
// console.log(text);
