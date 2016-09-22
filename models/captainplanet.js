'use strict'
module.exports = function (sequelize, DataTypes) {
  var captainplanet = sequelize.define('captainplanet', {
    name: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    description:DataTypes.TEXT,
    picture:DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        models.captainplanet.belongsTo(models.user)
      }
    }
  })
  return captainplanet
}
