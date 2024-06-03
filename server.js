const express = require('express');
const dotenv = require('dotenv').config();

const errorHandler = require("./middleware/errorHandler.js");
const contactRoute = require("./routers/contactRoute.js");

const dbConnect = require("./config/dbConnect.js");

dbConnect();

const app = express();
// for pass body's json data to server
app.use(express.json());
// for error handling

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Home page in port : ${port}`);
})

app.use("/api/contacts", contactRoute);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})