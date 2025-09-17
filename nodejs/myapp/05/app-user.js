import express from "express";
import path from "path";
import mysql from 'mysql2/promise';

const __dirname = import.meta.dirname;
const app = express();

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
app.set("views", path.join(__dirname)); //같은 폴더

// app.get("/welcome", (req, res) => {
//     const userName = req.query.name;
//     res.render("welcome", { name: userName });
// });



const pool = mysql.createPool({
  host: 'localhost', user: 'root', password: '1234', database: 'mydb',
  port:3307, waitForConnections: true, connectionLimit: 10,
})

const getUsers = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM assembly_member  order by row_num limit 50');
    console.log(rows);
    return rows;
  } catch (e) {
    console.error('조회 실패:', e.message);
  }
};
// getUsers();


app.get("/welcome/:user", async (req, res) => {
    const user = req.params.user;
    const name = req.query.name;
    const rows = await getUsers();
    res.render(
        "welcome", { 
            name: name,
            user : user,
            items: ["apple", "banana", "cherry"],
            rows : rows
         }
    );
});
// app.get('/',(req,res)=>{
//   res.render(
//     'assembly_member',{
//       title:'국회의원'
//     }
//   )
// })

app.listen(3000, () => {
    console.log("서버 실행 중: http://localhost:3000");
}); 