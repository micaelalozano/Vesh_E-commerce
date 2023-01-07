const Sequelize = require("sequelize");
//require("dotenv").config();

//const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

const db = new Sequelize(
  "sonny_blqe",
  "micaelalozano",
  "VpqWeQBehTgj5GZPKoYE1GwNLNkSWUWu",
  {
    host: "dpg-cesu57o2i3mh51vnrp7g-a",
    dialect: postgres,
    logging: false,
  }
);

/*{const db = new Sequelize("sonny", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});}*/

module.exports = db;
