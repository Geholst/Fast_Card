const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Flashcard extends Model {}

Flashcard.init({
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    front: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    back: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    tag: {
        type: DataTypes.INTEGER,
    },
},{
    sequelize
});

module.exports=Flashcard