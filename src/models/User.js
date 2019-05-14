const mongoose = require('mongoose')

const userSchema  = new mongoose.Schema({
    nickname:String,
    avatar:String,
    joinStamp:String,
})

module.exports = mongoose.model('User', userSchema)