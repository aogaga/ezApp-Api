'use strict';
module.exports = (sequelize, DataTypes) => {
  var Outlet = sequelize.define('Outlet', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Outlet;
};