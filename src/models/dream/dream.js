'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dream extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dream.init(
    {
      hours: DataTypes.INTEGER,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Dream',
    },
  );
  return Dream;
};
