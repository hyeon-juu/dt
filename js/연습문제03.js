// const a = true;
// let b = 5;
// const result = a && ++b;
// console.log(a, b, result);
// //and연산이 or연산보다 우선순위가 높음

let fTemp = 122;
let cTemp = ((fTemp - 32) * 5) / 9;
console.log(`화씨 : ${fTemp} 섭씨 : ${cTemp}`);

let num1 = 456;
let num2 = 111;

function b(n) {
  console.log(Math.floor(n / 100) * 100);
}
b(num1);
b(num2);

let num = 12345;
num = num.toString();
let sum = 0;
for (let i = 0; i < num.length; i++) {
  sum += parseInt(num[i]);
}

console.log(sum);
