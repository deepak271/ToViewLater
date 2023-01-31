const express = require('express')
const bodyparser = require('body-parser')
require('dotenv').config()
const db = require('./db/db');

const app = express()
const port = process.env.PORT || 8080;
db();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, (err) => {
  console.log(`app listening on port ${port}`)  //app.listen([port[, host[, backlog]]][, callback])
  if(err)
  console.log("error ocuured in listening");
})