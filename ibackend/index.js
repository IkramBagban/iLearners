const express = require("express");
const connection = require("./config/db");
const sheetRouter = require("./routes/sheetRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use("/sheets", sheetRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`PORT is listening on ${PORT}`);
});
