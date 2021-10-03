const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Create prop model
class Prop extends Model { }

//Create fields/columns for prop model
Prop.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      branch_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      branch_address: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
  
      branch_number: {
      type: DataTypes.TEXT,
       allowNull: false,   
        },
  
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'prop'
    }
  );
  
  module.exports = Prop;
