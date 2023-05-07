import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize('transactions-exercise', 'root', process.env.DB_PASSWORD, {
  dialect: 'mysql',
  host: 'localhost',
});

export default sequelize;