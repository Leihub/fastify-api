const configController = require('../controller/configController')

const routes = [
    {
        url:"/api/*",
        method:['DELETE','GET','POST','PUT'],
        handler:configController.baseConfig
    }
]

module.exports = routes