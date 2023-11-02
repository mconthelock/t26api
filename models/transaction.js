'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {}
  }

  Transaction.init({
    referno: {
        type: DataTypes.STRING,
        allowNull: false
      },
      referdate: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
      },
      refertype: { type: DataTypes.STRING(20) },
      detail: {type: DataTypes.STRING},
      contactname: {type: DataTypes.STRING},
      contactno: {type: DataTypes.STRING(10)},
      payment: {type:DataTypes.STRING(50)},
      amount: {type: DataTypes.FLOAT},
      discount: {type: DataTypes.FLOAT, defaultValue: 0},
      tax: {type: DataTypes.FLOAT, defaultValue: 0}
  }, {
    sequelize,
    modelName: 'Transaction',
    tableName: 'Transaction'
  });
  return Transaction;
};