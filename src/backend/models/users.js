const { DataTypes } = require('sequelize');
const connectionDB = require('../config/db/conexionsqualize');

const User = connectionDB.define(
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
