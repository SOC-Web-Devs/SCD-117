module.exports = app =>{
    const matrix = require('../controllers/InsertMatrixController');
    var router = require('express').Router();
    router.post("/matrix" , matrix.create);
    app.use('/api/agents', router);
}