const matrixData = require('../models/getMatrixData/getMatrixData');

exports.findById = (req,res)=>{
    matrixData.findByAgentId(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found matrix with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving matrix with id " + req.params.id
            });
          }
        } else res.send(data);
      });
}