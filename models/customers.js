const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Customers extends Model {}

Customers.init({
    // add properites here, ex:
    content: {
         type: DataTypes.STRING,
         allowNull:false,
         validate:{
            len:[1,241]
         }
    }
},{
    sequelize
});

module.exports= Customers