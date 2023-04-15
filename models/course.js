const Sequelize = require("./connection");
const { DataTypes } = require("sequelize");
 
const course = Sequelize.define("course", {
    courseName: {
        type: DataTypes.STRING,
        allowNull: false 
    },

    courseId: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true
    },
}, { timestamps: false });

module.exports = course;