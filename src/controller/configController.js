const boom = require('boom')
exports.baseConfig = async(req,reply) => {
    try{
        
    }catch(e){
        throw boom.boomify(err)
    }
}