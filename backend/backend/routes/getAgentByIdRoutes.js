module.exports = app=>{
    const agentById = require('../controllers/getAgentByIdController');
    var router = require('express').Router();
    router.get("/agent/:id", agentById.findById);
    app.use('/api/agents', router);
}