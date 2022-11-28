const MatrixRecord = require('../models/insertMatrix/InsertMatrix');

exports.create = (req,res)=>{
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      } 

      
  const matrix = new MatrixRecord({
    child_id: req.body.child_id,
    parent_id: req.body.parent_id,
    left_child: req.body.left_child,
    right_child: req.body.right_child
  });

  MatrixRecord.create(matrix, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Record."
      });
    else res.send(data);
  });

};