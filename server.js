import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import passport from "passport";
import path from "path";
import configs from "./config/config";
import UserRouter from "./routes/api/user";
import RideRouter from "./routes/api/ride";
import RequestRouter from "./routes/api/requests";
const port = process.env.PORT || 5000;
const app = express();

const env = process.env.NODE_ENV || "development";
const config = configs[env];

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose.connect(config.DATABASE_URL, { useNewUrlParser: true });

mongoose.connection
  .once("open", () => {
    console.log("Connection to the database successfully made");
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
app.use(
  "/api/requests/",
  passport.authenticate("jwt", { session: false }),
  RequestRouter
);

if (process.env.NODE_ENV === "production") {
  // serve static files
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const server = app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});

export { app, server };
