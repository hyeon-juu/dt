// //var 쓰면 호이스팅, 함수도 호이스팅

// value = 10;
// console.log(value);
// var value;

// // value = 10;
// // console.log(value);
// // let value;

// f();

// function f() {}

// let number = 10;
// console.log(`1 number: ${number}`);
// console.log("1 number: " + number);

// {
//   let number = 100;
//   console.log(`2 number: ${number}`);
// }

// console.log(`3 number: ${number}`);

// function f() {
//   //   alert("");
//   var s = 10;
// }
// f();
// console.log(s);

// //함수는 자료형으로 취급
// let a = f;
// // a();

let title = "a";
console.log(title);

title = "b";

if (true) {
  var title2 = "if내 제목";
  console.log(title2);
}
console.log(title2);

//페이지네이션 - 페이지를 이동할 수 있는 네비게이션
