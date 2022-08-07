const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Product extends Model {}

Product.init({
    productName: 
    {
         type: DataTypes.STRING,
         allowNull:false,
         unique:false,  // so multiple vendors can add the same product with 
                        // different prices to the table?
    },
    description: 
    {
        type: DataTypes.TEXT,
        allowNull:true,
    },
//    tag: 
//    {
//     type:DataTypes.STRING,
//    },
   inStock:
   {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
   },
},
{
    sequelize,
    timestamps: false,
});
module.exports=Product