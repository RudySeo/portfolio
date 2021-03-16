const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");

const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

// 환경 변수 적용
dotenv.config({ path: "./config/config.env" });

//express 생성
const app = express();
// DB 설정
connectDB();

// bodyParser
app.use(bodyParser.json());

// fileupload
app.use(fileupload());
app.use(express.static(path.join(__dirname, "public")));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routing import

const users = require("./routes/users");
const meals = require("./routes/meals");
const workout = require("./routes/workout");

// testing
// app.get("/", (req, res, next) => {
//   res.status(200).json({ return: "hello" });
// });

// API Mapping
app.use("/api/users", users);
app.use("/api/meals", meals);
app.use("/api/workout", workout);

// error handler

app.use(errorHandler);

//서버 오픈
const PORT = process.env.PORT || 6000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("server not open");
  } else {
    console.log("Server open ");
  }
});