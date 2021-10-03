const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ReachOut extends Model { }

ReachOut.init(
    {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true
        // },
        your_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        your_contact_number: {
            type: DataTypes.TEXT,  
            allowNull: false,
        },
        your_message: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'reach_out'
    }
);


module.exports = ReachOut;
