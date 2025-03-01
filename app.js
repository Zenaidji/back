var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
var dbConnection = require("./controllers/db.controller").dbConnection;
var clientRouter = require("./routes/client");
var questionRouter = require("./routes/question");

var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/client", clientRouter);
app.use("/question", questionRouter);

module.exports = app;
