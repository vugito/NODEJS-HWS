const express = require("express");
const cors = require("cors");
const data = require("./data/houseList");

const app = express();
const HOST = 7000;

app.use(cors());

app.get("/items", (req, res) => {
  let query = req.query;

  // console.log(query.filter);

  console.log("Client => Get => List Houses");

  if (query && query.filter !== "all") {
    let newArr = data.filter(
      (item) => item.city.toLowerCase() === query.filter
    );
    // console.log(newArr);
    res.json(newArr);
  } else {
    res.json(data);
  }
});

app.listen(HOST, () => {
  console.log("Port " + HOST + " listens. ");
});
