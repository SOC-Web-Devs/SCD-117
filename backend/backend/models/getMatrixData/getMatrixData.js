const { json } = require("express");
const sql = require("../db");

const GetMatrixData = function(agent) {
  console.log(agent);
    this.id= agent.id;
  };

  GetMatrixData.findByAgentId = (id, result) => {
    //console.log(newAgent);
    //console.log(result);
    sql.query(`Select * from matrix where child_id = ${id}`,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found matrix id in agent: ", res);
        result(null, res);
        return res;
      }
  
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
    });
 
  };


  module.exports = GetMatrixData;