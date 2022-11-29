module.exports = app =>{
    const updateParent = require('../controllers/updateMatrixParentId');
    var router = require('express').Router();
    router.put("/update/:id", updateParent.update);
    app.use('/api/agents', router);
}