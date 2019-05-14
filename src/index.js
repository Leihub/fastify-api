const fastify = require('fastify')({logger:true})
const routes = require('./routes/ties')
const swagger = require('./config/swagger')


fastify.register(require('fastify-swagger'), swagger.options)
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
    try{
        await fastify.listen(3001)
        fastify.swagger()
        fastify.log.info(`server listening on ${address}`)
    }catch(e){
        fastify.log.error(e)
        process.exit(1)
    }
}

start()