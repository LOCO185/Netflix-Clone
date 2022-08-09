const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull !"))
  .catch((error) => console.log(error));

  app.use(express.json());
  
  // add routes

app.listen(8800, () => {
  console.log("Backend server is running !");
});
