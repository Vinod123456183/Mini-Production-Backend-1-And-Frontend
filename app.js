const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");

require("dotenv").config();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const db = require("./config/mongoose-atlas-connection");
// const db = require("./config/mongoose-connection");
const indexRouter = require("./routes/index-router");

// app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

app.use("/", indexRouter);

app.listen(process.env.PORT);


app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({
    success: false,
    message,
  });
});


