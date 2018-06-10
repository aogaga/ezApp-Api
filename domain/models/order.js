'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    recived: DataTypes.DATE,
    recivedBy: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    completionDate: DataTypes.DATE,
    status: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    pickupLocation: DataTypes.TEXT,
    factoryId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Order;
};