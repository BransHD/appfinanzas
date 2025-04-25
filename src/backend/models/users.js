const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db/conexionsqualize');

const User = sequelize.define(
  'User',
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usernam: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    timestamps: false,
  }
);

module.exports = User;
