const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./config/config");
const port = process.env.PORT || 5000;

mongoose.connect(
  db.development.DATABASE_URL,
  { useNewUrlParser: true }
);

mongoose.connection
  .once("open", () => {
    console.log("Connection to the database successfully made ");
  })
  .on("error", error => {
    console.log(error);
  });

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
