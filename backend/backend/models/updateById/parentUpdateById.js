const { json } = require("express");
const sql = require("../db");

const ParentId = function(parent_id) {
    this.id = parent_id.id;
}
ParentId.updateById = (id, parent_id, result) => {
    sql.query(
      "UPDATE matrix SET parent_id = ?  WHERE child_id = ?",
      [parent_id.id , id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Tutorial with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated parent id: ", { id: id, ...parent_id });
        result(null, { id: id, ...parent_id });
      }
    );
  };

  module.exports = ParentId;