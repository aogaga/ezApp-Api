'use strict';
module.exports = (sequelize, DataTypes) => {
  var Payment = sequelize.define('Payment', {
    customerId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Payment;
};