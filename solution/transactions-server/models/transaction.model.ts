import Sequelize from 'sequelize';
import sequelize from '../config/database.config';

const Transaction = sequelize.define('transaction', {
  id: {
    type: Sequelize.UUID,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  product: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  value: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  vendor: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

export default Transaction;

