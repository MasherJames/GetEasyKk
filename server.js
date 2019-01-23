import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import passport from "passport";
import db from "./config/config";
import UserRouter from "./routes/api/user";
import RideRouter from "./routes/api/ride";
import RequestRouter from "./routes/api/requests";
const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

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

// Thirdparty middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users/", UserRouter);
app.use("/api/rides/", RideRouter);
app.use("/api/requests/", RequestRouter);

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
