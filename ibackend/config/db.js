const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log("Database has been connected!");
  })
  .catch((e) => {
    console.log("Error Connection!", e);
  });



// love babbar : 
  
  