import express from "express";
import path from "path";

const __dirname = import.meta.dirname;
const app = express();

app.set("view engine", "pug");//사용할 템플릿
app.set("views", path.join(__dirname, "views"));//템플릿 파일의 위치

app.get("/", (req, res) => {
    res.render("index", { name: "nodejs" });
});

app.listen(3000, () => {
    console.log("서버 실행 중: http://localhost:3000");
});

//리액트 사용하지 않고 nodejs만으로 웹사이트 구축하는 경우(단일 서버)
//템플릿 사용