const mongoose = require('mongoose');
//require('dotenv').config();

const uri = process.env.MONGO_URI;
//console.log(uri);
 function connection() {
     mongoose.connect(uri,(err)=>{
    if(err)
    console.log('error connectiong to db\n'+err)
    else{
        console.log("connected to database.")
    }
})
}

module.exports = connection;