const express = require('express');
const dotenv = require('dotenv').config();

const contactRoute = require("./routers/contactRoute.js");

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Home page in port : ${port}`);
})

app.use("/api/contacts", contactRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})