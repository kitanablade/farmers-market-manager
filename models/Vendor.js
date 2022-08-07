const { Model, DataTypes } = require('sequelize');
const bcrypt = require("bcryptjs")
const sequelize = require('../config/connection');


class Vendors extends Model {}

Vendors.init({
    // Proper name of vendor for public display
    vendorName:{
        type:DataTypes.STRING,
        allowNull:false,
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
    default:""
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