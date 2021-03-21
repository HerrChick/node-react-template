import express from "express";
import bodyParser from "body-parser";
// import knex from "knex";
import path from "path";

const PORT = process.env.PORT || 4001;

const app = express();
const DIST_DIR = path.join(__dirname, "../dist/");
const ENTRY_HTML = path.join(DIST_DIR, "index.html");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(DIST_DIR));

app.get("/api/test", (req, res) => {
  res.json({
    message: "test",
  });
});

app.get("*", (req, res) => {
  res.sendFile(ENTRY_HTML);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
