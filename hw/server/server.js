const express = require("express");
const cors = require("cors");

const app = express();
const HOST = 7000;

app.use(cors());

app.listen(HOST, () => {
  console.log("Port " + HOST + " listens. ");
});
