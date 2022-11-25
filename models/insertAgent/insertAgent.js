const { json } = require("express");
const sql = require("../db");

const AgentRecord = function(agent) {
  console.log(agent);
    this.name = agent.name;
    this.referral_id = agent.referral_id;
  };

  AgentRecord.create = (newAgent, result) => {
    //console.log(newAgent);
    //console.log(result);
    if(newAgent.referral_id <= 0 ){
      console.log("id is not valid")
      result(null , "Id is not valid");
    }
    else{
    sql.query("INSERT INTO agent SET ?", newAgent,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created tutorial: ", { id: res.insertId, ...newAgent });
      result(null, { id: res.insertId, ...newAgent });
    });
  }
  };


  module.exports = AgentRecord;