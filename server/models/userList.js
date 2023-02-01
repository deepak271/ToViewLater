const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

const userListSchema = new Schema(
    {
        title: {
          type: String,
          required: true,
        },
        link: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
          maxlength: 250,
        },
        type: {
          type: String,
          required: true,
        },
        tags: [{ type: String }],      
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        date:{
            type:Date,
            default:new Date()
        }
      }
)

const userList = mongoose.model('list',userListSchema);

module.exports = userList;