const express = require("express");
const app = express();

app.set("port", 3000);

// http method: GET(정보 조회), POST(정보 생성), PUT(정보 수정), PATCH(정보 수정), DELETE(정보 삭제)
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(app.get("port"), () => {
    console.log(`${app.get("port")}번 포트에서 대기 중`);
});