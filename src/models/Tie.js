const mongoose = require('mongoose')

const tieSchema  = new mongoose.Schema({
    nickname:String,
    avatar:String,
    timeStamp:Number,
    content:String,
    title:String,
})

module.exports = mongoose.model('Tie', tieSchema)