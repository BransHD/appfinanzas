const { Model, DataTypes } = require('sequelize');
const connectionDB = require('../config/db/conexionsqualize');

class Category extends Model {
  // Aquí puedes poner métodos personalizados si deseas
  getResumen() {
    return `${this.nomb_cater} - ${this.desc_cater}`;
  }
}

Category.init(
  {
    id_cater: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_client: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nomb_cater: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    desc_cater: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ran_limit: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: true,
    },
    state: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    userCreate: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    feccre: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    userModify: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    fecmov: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: connectionDB, // instancia de conexión obligatoria
    modelName: 'Category', // nombre del modelo
    tableName: 'category',
    timestamps: false,
  }
);

module.exports = Category;
