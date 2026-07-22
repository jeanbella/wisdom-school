import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_NAME, DB_PASS, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
  pool: {
    acquire: 30000,
    idle: 10000,
    max: 5,
    min: 0,
  },
});

export default sequelize;
