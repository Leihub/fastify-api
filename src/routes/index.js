
const appRoutes = require('../routes/ties')
const carRoutes = require('../routes/cars')

const routes = [...appRoutes,...carRoutes]

module.exports = routes