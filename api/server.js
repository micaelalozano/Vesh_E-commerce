const express = require("express");
const app = express();
const db = require("./db");
const models = require("./models");
const router = require("./routes");
const cors = require("cors");
const PORT = process.env.PORT || 3001;

app.use(express.static("src"));

//Middleware

app.use(cors()); //npm i cors para instalar
app.use(express.json());

app.use("/api", router);

db.sync({ force: false }).then(() => {
  console.log("Db Connected");
  app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
});
