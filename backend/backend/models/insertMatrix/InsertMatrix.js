const { json } = require("express");
const sql = require("../db");

const MatrixRecord = function(child) {
    this.child_id = child.child_id;
    this.parent_id = child.parent_id;
    this.left_child = child.left_child;
    this.right_child = child.right_child;
  };

  MatrixRecord.create = (newMatrix, result) => {
    //console.log(newAgent);
    //console.log(result);
    if(newMatrix.referral_id <= 0 ){
      console.log("id is not valid")
      result(null , "Id is not valid");
    }
    else{
    sql.query("INSERT INTO matrix SET ?", newMatrix,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created matrix: ", { id: res.insertId, ...newMatrix });
      result(null, { id: res.insertId, ...newMatrix });
    });
  }
  };


  module.exports = MatrixRecord;