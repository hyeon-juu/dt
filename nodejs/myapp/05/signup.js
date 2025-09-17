import express from "express";
import path from "path";
const __dirname = import.meta.dirname;
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



app.use(express.urlencoded());


// GET /signup - 폼 보여주기
app.get("/signup", (req, res) => {
    res.render("signup", { error: null, values: {} });
});
// POST /signup - 유효성 검사
app.post("/signup", (req, res) => {
    const { username, password, confirm } = req.body;
    // TODO: 유효성 검사 코드 작성
    // 성공 시
    // res.render("signup-welcome", { username });
    if (!username || !password) {
        return res.render("signup", {
            error: "아이디와 비밀번호를 모두 입력하세요.",
            values: req.body
        });
    }
    if (username.length > 20 || password.length > 20) {
        return res.render("signup", {
            error: "입력값은 20자 이하만 가능합니다.",
            values: req.body
        });
    }
    if(confirm != password){
        return res.render("signup", {
            error: "비밀번호 다름.",
            values: req.body
        });
    }
        return res.render("signup-welcome", { username });
    // if (username === "user" && password === "1234") {
    // }
    // return res.render("signup", {
    //     error: "아이디 또는 비밀번호가 일치하지 않습니다.",
    //     values: req.body
    // });
});
app.listen(3000, () => {
    console.log(" 서버 실행 중: http://localhost:3000/signup");
});
