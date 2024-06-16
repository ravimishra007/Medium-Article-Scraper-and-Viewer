require("dotenv").config();
const express = require('express');
const cors =require('cors');
const { dbToConnection } = require("./config/dbConnection");
const { articleScrapperRouter } = require("./routes/routes");

const app = express();
app.use(express.json());
app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use("/mediumScrapper",articleScrapperRouter)


app.listen(process.env.PORT, () => {
  dbToConnection();
  console.log(`Server is running  at port ${process.env.PORT}`);
});