const { json } = require("express");
const sql = require("../db");

const AgentRecordById = function(agent) {
  console.log(agent);
    this.id= agent.id;
  };

  AgentRecordById.findByAgentId = (id, result) => {
    //console.log(newAgent);
    //console.log(result);
    sql.query(`Select * from agent where referral_id = ${id}`,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found tutorial: ", res);
        result(null, res);
        return;
      }
  
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
    });
 
  };


  module.exports = AgentRecordById;