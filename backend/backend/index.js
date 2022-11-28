const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
 require("./routes/agentRoutes")(app);
 require("./routes/getAgentByIdRoutes")(app);
 require("./routes/matrixRoutes")(app);
 require("./routes/getMatrixDataRoutes")(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });

