require("dotenv").config();
require("express-async-errors");

const express = require("express");
const path = require("path");
const morgan = require("morgan");

const { sequelize } = require("./models");
sequelize.sync({ force: false })
    .then(() => {
        console.log("데이터베이스 연결 성공");
    })
    .catch((err) => {
        console.error(err);
    });

const notFoundMiddleWare = require("./middleware/not-found");
const errorHandlerMiddleWare = require("./middleware/error-handler");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(`/api/user`, require("./router/user"));
app.use(`/api/post`, require("./router/post"));
app.use("/api/comment", require("./router/comment"));

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);

app.listen(app.get("port"), () => {
    console.log(`server is listening on port ${app.get("port")}`);
});