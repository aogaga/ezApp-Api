'use strict';
module.exports = (sequelize, DataTypes) => {
  var Factory = sequelize.define('Factory', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Factory;
};