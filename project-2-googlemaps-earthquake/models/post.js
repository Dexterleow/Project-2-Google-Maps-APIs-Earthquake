'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('post', {
    projectTitle: DataTypes.STRING,
    picture: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    userid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // models.post.belongsTo(models.user);
      }
    }
  });
  return post;
};
