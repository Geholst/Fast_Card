const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Deck extends Model {}

Deck.init({
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    started: {
        type: DataTypes.BOOLEAN,
        defaultValue: "false"
    },
    finished: {
        type: DataTypes.BOOLEAN,
        defaultValue: "false"
    }
},{
    sequelize
});

module.exports=Deck