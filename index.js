require("dotenv").config();
const express = require("express");
const connection = require("./db");
const cors = require("cors");
const port = 3000;
const route = require("./routes/route");
const app = express();

connection();
app.use(cors());
app.use(express.json());
app.use("/api", route);
app.get("/", (req, res) => {
  return res.send("simpleNodeJS-API-JWT");
});
app.listen(port);
