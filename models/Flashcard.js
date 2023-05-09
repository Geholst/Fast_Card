const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Flashcard extends Model {
  
}

Flashcard.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    front: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    back: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    started: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
    },
    reviewDay: {
        type: DataTypes.STRING
    },
    tag: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
  }
);

module.exports = Flashcard;
