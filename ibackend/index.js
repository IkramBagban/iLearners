const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");
const connection = require("./config/db");
const sheetRouter = require("./routes/sheetRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use("/sheets", sheetRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(process.env.URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`PORT is listening on ${PORT}`);
    });
  })
  .catch((e) => {
    console.log("Error Connection!", e);
  });
