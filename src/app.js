import express from "express";
import morgan from "morgan";
import path from "path";

const app = express();

app.set("port", 3000);

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.set("/", (req, res) => {
  res.render("index.html");
});

module.exports = app;
