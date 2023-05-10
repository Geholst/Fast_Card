const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");
const Box = require("./Box"); // import Box model

class Profile extends Model {}

Profile.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    hooks: {
      beforeCreate: (profileObj) => {
        console.log(profileObj);
        profileObj.password = bcrypt.hashSync(profileObj.password, 3);
        return profileObj;
      },
    },
  }
);

// add property and reference to Box model
// Profile.belongsTo(Box, {
//   foreignKey: {
//     allowNull: false,
//   },
// });
// Box.hasMany(Profile);

module.exports = Profile;
