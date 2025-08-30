import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: process.env.DATABASE_DIALECT,
  database: process.env.DATABASE_DB,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  dialectOptions: {
    ssl: true,
  },
});

export default sequelize;
