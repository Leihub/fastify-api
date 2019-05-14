const appController = require('../controller/appController')

const routes = [
    {
        url:"/api/ties",
        method:'GET',
        handler:appController.getTieList
    }
]

module.exports = routes