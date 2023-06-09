const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class Profile extends Model {}

Profile.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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

module.exports = Profile;
