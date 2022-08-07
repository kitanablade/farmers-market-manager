const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Events extends Model {}

Events.init({
    eventName: {
         type: DataTypes.STRING,
         allowNull:false,
         unique:false,  
    },
    location: {
        type: DataTypes.STRING,
   },
   description: {
    type: DataTypes.TEXT,
   }
},{
    sequelize
});

module.exports=Events;