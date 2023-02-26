const express = require('express')
const bodyparser = require('body-parser')
require('dotenv').config()
const db = require('./db/db');
const routes=require('./routes/routes')



const app = express()
const port = process.env.PORT || 8080;
db();
app.use(express.json());
app.use('/',routes);

app.listen(port, (err) => {
  console.log(`app listening on port ${port}`)  //app.listen([port[, host[, backlog]]][, callback])
  if(err)
  console.log("error ocuured in listening");
})