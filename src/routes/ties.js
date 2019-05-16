const appController = require('../controller/appController')

const routes = [
    {
        url:"/api/ties",
        method:'GET',
        handler:appController.getTieList
    },
    {
        url:"/api/add",
        method:'POST',
        handler:appController.addTie
    },

]

module.exports = routes