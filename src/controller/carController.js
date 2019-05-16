const boom = require('boom')

const Car = require('../models/Car')


exports.getCars = async(req,res) => {
    try{
        const cars = await Car.find()
        return cars
    }catch(err){
        throw boom.boomify(err)
    }
}

exports.getCarSingle = async(req,res) => {
    try{
        const id = req.id
        const car = await Car.findById(id)
        return car
    }catch(err){
        throw boom.boomify(err)
    }
}

exports.addCar = async(req,res) => {
    try{
        console.log(req.body);
        const car = new Car(req.body)
        return car.save()
    }catch(err){
        throw boom.boomify(err)
    }
}

exports.updateCar = async(req,res) => {
    try{
        const id = req.params.id
        const newCar = req.body
        const { ... updataCar } = newCar
        const update = await Car.findOneAndUpdate(id,update,{new:true})
        return update
    }catch(err){
        throw boom.boomify(err)
    }
}

exports.deleteCar = async(req,res) => {
    try{
        const id = req.params.id
        const delCar = await Car.findByIdAndDelete(id)
        return delCar
    }catch(err){
        throw boom.boomify(err)
    }
}