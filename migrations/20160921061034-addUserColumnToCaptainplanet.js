'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('captainplanets', 'userId', {
      type: Sequelize.INTEGER
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('captainplanets', 'userId')
  }
}
