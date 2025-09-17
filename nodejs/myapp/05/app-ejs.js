import express from "express";
import path from "path";

const __dirname = import.meta.dirname;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


//dirname => app-ejs.js 위치
//c:/front/nodejs/myapp/05 + /public
//path.resolve() => node 또는 nodemon 실행하는 위치
//c:/front/nodejs/myapp + /public
app.use(express.static(path.join(import.meta.dirname,'../public')));
//                                c:/front/nodejs/myapp/05    
app.get("/", (req, res) => {
    res.render("index", { name: "nodejs" });
});
app.listen(3000, () => {
    console.log("서버 실행 중: http://localhost:3000");
}); 