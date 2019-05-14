const carController = require('../controller/carController')

const routes = [
    {
        url:"/api/cars",
        method:'GET',
        handler:carController.getCars
    },
    {
        url:"/api/cars/:id",
        method:'GET',
        handler:carController.getCarSingle
    },
    {
        url:"/api/cars",
        method:'POST',
        handler:carController.addCar
    },
    {
        url:"/api/cars/:id",
        method:'PUT',
        handler:carController.updateCar
    },
    {
        url:"/api/cars/:id",
        method:'DELETE',
        handler:carController.deleteCar
    }
]

module.exports = routes