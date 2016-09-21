'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('captainplanets', 'description', {
      type: Sequelize.TEXT
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('captainplanets', 'description')
  }
}
