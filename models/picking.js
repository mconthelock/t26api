'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Picking extends Model {
    static associate(models) {}
  }

  Picking.init({
    reftrans:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: { type: DataTypes.FLOAT },
    qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
  }, {
    sequelize,
    modelName: 'Picking',
    tableName: 'Picking'
  });
  return Picking;
};