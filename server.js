const express = require("express");
const cors = require("cors");
const router = require("./routes/userRouter");
const db = require("./db/config");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded(true))
app.use("/", router);

let PORT =process.env.PORT || 8000;
app.listen(PORT, (req, res) => {
  console.log("server start");
});
