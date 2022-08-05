const { Model, DataTypes } = require('sequelize');
const bcrypt = require("bcrypt")
const sequelize = require('../config/connection');


class Vendors extends Model {}

Vendors.init({
    // Proper name of vendor for public display
    vendorName:{
        type:DataTypes.STRING,
        allowNull:false,
   },
   // Vendor admin's personal username for login
    username: {
         type: DataTypes.STRING,
         allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
   },
   password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[8]
        }
   },
   description:{
    type:DataTypes.TEXT,
}
},{
    sequelize,
    hooks:{
        beforeCreate:userObj=>{
            userObj.password = bcrypt.hashSync(userObj.password,8);
            return userObj;
        }
    }
});

module.exports= Vendors;