const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.sendFile("pfolio.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`listeinig to ${port}`);
});
