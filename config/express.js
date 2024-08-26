import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { join, dirname } from "path";
import usersRouter from "../routes/index.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/css", express.static(join(__dirname, "../public/css")));
app.use("/images", express.static(join(__dirname, "../public/images")));
app.use("/uploads", express.static(join(__dirname, "../public/uploads")));
app.use("/js", express.static(join(__dirname, "../public/js")));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../views/index.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(join(__dirname, "../views/index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(join(__dirname, "../views/contact.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(join(__dirname, "../views/about.html"));
});

app.use("/users", usersRouter);

export default app;
