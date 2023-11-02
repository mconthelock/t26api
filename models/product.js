'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {}
  }

  Product.init({
    productname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productdetail: { type: DataTypes.STRING(3000) },
    brand: { type: DataTypes.STRING(150) },
    unit: { type: DataTypes.STRING(25) },
    totalqty: {type: DataTypes.INTEGER,},
    minqty: {type: DataTypes.INTEGER,},
    buyprice: {type: DataTypes.FLOAT},
    saleprice: {type: DataTypes.FLOAT},
    vatrate: {type: DataTypes.FLOAT},
    status: {type:DataTypes.BOOLEAN, defaultValue: true },
    images: {type: DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'Products'
  });
  return Product;
};