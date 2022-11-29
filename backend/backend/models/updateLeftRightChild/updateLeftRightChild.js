const { json } = require("express");
const sql = require("../db");

const LeftRightParentId = function(parent_id) {
    this.id = parent_id.id;
    this.position = parent_id.position;
}
LeftRightParentId.updateById = (id, parent_id, result) => {
    sql.query(
      `UPDATE matrix SET ${parent_id.position} = ?  WHERE child_id = ?`,
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

  module.exports = LeftRightParentId;