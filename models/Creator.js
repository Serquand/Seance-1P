const Sequelize = require("./connection");
const { DataTypes } = require("sequelize");

const creator = Sequelize.define("Creator", {
    creatorId: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    }, 

    creatorName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },  

    creatorDiscordId: {
        type: DataTypes.STRING(18),
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = creator;