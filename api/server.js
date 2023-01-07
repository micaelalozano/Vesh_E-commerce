const express = require("express");
const app = express();
const db = require("./db");
const models = require("./models");
const router = require("./routes");
const cors = require("cors");

app.use(express.static("src"));

//Middleware

//app.use(cors()); //npm i cors para instalar
app.use(
  cors({
    // Si aún no tenes deployado tu front en origin va la url local.
    // Una vez que se deploye el front acá va esa url que te entrega.
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", router);

db.sync({ force: false }).then(() => {
  console.log("Db Connected");
  app.listen(5432, () => console.log("Servidor escuchando en el puerto 5432"));
});
