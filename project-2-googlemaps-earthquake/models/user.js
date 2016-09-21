'use strict';

var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    len: {
      args: [1, 99],
      msg: 'Name must be between 1 and 99 characters'
    }
  }
},
email: { //Email must be unique in database
type: DataTypes.STRING,
allowNull: false,
validate: {
  isEmail: {
    msg: 'Invalid email address'
  }
}
},
password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 99],
        msg: 'Password must be between 8 and 99 characters'
      }
    }
  }
}, {
    hooks: {
      beforeCreate: function(createdUser, options, cb) {
        var hash = bcrypt.hashSync(createdUser.password, 10);
        createdUser.password = hash;
        cb(null, createdUser);
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      
      }
    },
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      },
      toJSON: function() {
        var jsonUser = this.get();
        delete jsonUser.password;
        return jsonUser;
      }
    }
  });
  return user;
};
