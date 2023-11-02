'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {}
  }

  Category.init({
    desc: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {type: DataTypes.CHAR(1)}
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'Categories'
  });
  return Category;
};