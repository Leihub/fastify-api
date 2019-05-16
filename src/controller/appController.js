const boom = require('boom')

const User = require('../models/User')
const Tie = require('../models/Tie')

exports.getTieList = async(req,res) => {
    try{
        const ties = await Tie.find()
        return ties
    }catch(e){
        throw boom.boomify(e)
    }
}

exports.addTie = async(req,res) => {
    try{
        console.log(req.body);
        const car = new Tie(JSON.parse(req.body))
        return car.save()
    }catch(e){
        throw boom.boomify(e)
    }
}