const fastify = require('fastify')({ logger: false })
const routes = require('./routes/index')
const swagger = require('./config/swagger')
const baseConfig = require('./controller/configController')
const bodyParse  = require('body-parser')

// fastify 中间件
fastify.use((req, res,next) => {
    const { origin, Origin, referer, Referer } = req.headers;
    const allowOrigin = origin || Origin || referer || Referer || '*';
    res.setHeader("Access-Control-Allow-Origin", allowOrigin);
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Credentials", true); //可以带cookies
    next()
})

fastify.use(bodyParse.json())
fastify.use(bodyParse.urlencoded({extended:false}))

fastify.register(require('fastify-swagger'), swagger.options)
console.log(routes);

routes.forEach((route, index) => {
    fastify.route(route)
})

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/demo')
    .then(() => {
        console.log('mongoose is running ');
    })
    .catch(e => {
        console.log(e)
    })

const start = async (address) => {
    try {
        await fastify.listen(3001)
        fastify.swagger()
        fastify.log.info(`server listening on ${address}`)
    } catch (e) {
        fastify.log.error(e)
        process.exit(1)
    }
}

start()