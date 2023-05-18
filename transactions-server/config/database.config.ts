import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  name: process.env.DB_NAME || 'transactions-exercise',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306
};

const sequelize = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
  dialect: 'mysql',
  host: dbConfig.host,
  port: dbConfig.port
});

export default sequelize;