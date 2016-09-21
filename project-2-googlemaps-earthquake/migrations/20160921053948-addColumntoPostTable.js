'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'posts',
      'userid',
      Sequelize.INTEGER);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn(
        'posts',
        'userid',
        Sequelize.INTEGER);
  }
};
