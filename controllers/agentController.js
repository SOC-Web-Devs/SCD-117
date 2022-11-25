const AgentRecord = require('../models/insertAgent/insertAgent');

exports.create = (req,res)=>{
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      } 

      
  const agent = new AgentRecord({
    name: req.body.name,
    referral_id: req.body.referral_id
  });

  AgentRecord.create(agent, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });

};