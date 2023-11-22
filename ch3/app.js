const express = require("express");
const app = express();

app.set("port", 3000);
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/users", require("./router/users"));

app.listen(app.get("port"), () => {
    console.log(`${app.get("port")}번 포트에서 대기 중`);
});