const { DataTypes } = require('sequelize');
const sequelize = require('../config/db/conexionsqualize');

const Category = sequelize.define(
  'Category',
  {
    id_cater: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nomb_cater: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    desc_cater: {
      type: DataTypes.TEXT, //varchar(max)
      allowNull: true,
    },
    state: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    ran_limit: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: true,
    },
  },
  {
    tableName: 'category',
    timestamps: false,
  }
);
