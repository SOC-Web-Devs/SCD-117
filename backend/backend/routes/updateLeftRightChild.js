module.exports = app =>{
    const updateParent = require('../controllers/updateLeftRightChildController');
    var router = require('express').Router();
    router.put("/updatechild/:id", updateParent.update);
    app.use('/api/agents', router);
}