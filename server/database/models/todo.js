'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ToDo.init({
    titulo: DataTypes.STRING,
    resumo: DataTypes.STRING,
    descicao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ToDo',
  });
  return ToDo;
};