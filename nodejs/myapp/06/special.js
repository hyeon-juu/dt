const response = await fetch('http://ggoreb.com/quiz/special.html');
 const data = await response.text();

 const idx = data.lastIndexOf('<!--');

 const text = data.substring(idx);// 코드 작성
 const regex = /[a-z]/g; //코드 작성
 const result = text.match(regex)// 코드 작성
 console.log(result.join(''));
// console.log(text);
