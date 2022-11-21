const mongoose = require('mongoose')

const User = new mongoose.Schema({

    email: {

        type :String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
  
      },
      
      password: {
  
        type :String,
        required: [true, "Please provide a password!"],
        
  
      },
      
      name: {
  
        type :String,
        required: [true, "Please provide a username!"],
        unique: [true, "UserName Exist"],
  
      } ,

      quote: {

        type : String


      }

    },

    { collection : 'user-data'}
)

const model = mongoose.model('UserData' , User)

module.exports = model