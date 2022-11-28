module.exports = app =>{
    const agent = require('../controllers/agentController');
    var router = require('express').Router();
    router.post("/agent" , agent.create);
    app.use('/api/agents', router);
}