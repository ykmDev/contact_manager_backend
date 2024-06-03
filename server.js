const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`App listening on port ${port}`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})