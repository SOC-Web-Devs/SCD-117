module.exports = app=>{
    const matrixData = require('../controllers/getMatrixDataController');
    var router = require('express').Router();
    router.get("/getMatrix/:id", matrixData.findById);
    app.use('/api/agents', router);
}