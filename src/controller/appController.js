const boom = require('boom')

const User = require('../models/User')
const Tie = require('../models/Tie')

exports. getTieList = async(req,res) => {
    try{
        const ties = await Tie.find()
        return ties
    }catch(e){
        throw boom.boomify(err)
    }
}