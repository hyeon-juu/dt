import fs from 'node:fs';

const date = new Date();
const text = `[${date.toISOString()}] 서버가 시작되었습니다`
console.log(text);


const exists = fs.existsSync('logs')
console.log(exists)

if(!exists) fs.mkdirSync("logs",{})
fs.writeFileSync('logs/log.txt',text);
fs.appendFileSync('logs/log.txt','\n추가');