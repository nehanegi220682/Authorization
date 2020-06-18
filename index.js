const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Import Routes
const authRoute = require("./routes/auth");
const privatePostRoute = require("./routes/privatePosts");

dotenv.config();

//Connect to db(url from mongodbatlas)
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("CONNECTED TO DB")
);

//Middlewares
app.use(express.json());

//Route Middleware
app.use("/api/user", authRoute);
app.use("/api/posts", privatePostRoute);

const port = process.env.Port || 3000;

app.listen(port, () => console.log("server is up and running ON PORT", port));
