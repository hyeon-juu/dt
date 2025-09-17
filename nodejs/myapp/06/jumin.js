const text = '791111-3234567';
 const regex = /^\d{6}-[1-4]\d{6}$/;
 //^는 시작, $는 끝을 의미
 console.log(regex.test(text));