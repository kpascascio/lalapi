const Kids = require('./Kids');
const sequelizedb = require('../db');
const Sequelize = require('sequelize');

const Behaviors = sequelizedb.define('child_behavior',{
    child:{
        type: Sequelize.STRING,
        allowNull: false
    },
    name_of_employee: {
        type:Sequelize.STRING,
        allowNull : false
    },
    incident: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false, 
    },
    time_of_day : {
        type: Sequelize.STRING,
        allowNull: false, 
    }

})


Behaviors.belongsTo(Kids(sequelizedb, Sequelize))

module.exports = Behaviors;