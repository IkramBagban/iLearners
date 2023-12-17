const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true
    },
    password : {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model('User', UserSchema)