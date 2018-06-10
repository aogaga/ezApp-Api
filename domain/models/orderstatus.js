'use strict';
module.exports = (sequelize, DataTypes) => {
  var OrderStatus = sequelize.define('OrderStatus', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return OrderStatus;
};