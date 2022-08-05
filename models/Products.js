const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model {}

Products.init({

    productName: 
    {
         type: DataTypes.STRING,
         allowNull:false,
         unique:false,  // so multiple vendors can add the same product with 
                        // different prices to the table?
    },
    description: {
        type:DataTypes.TEXT
    },
    tag: 
   {
    type:DataTypes.STRING,
   },
   stock:
   {
    type: DataTypes.BOOLEAN,
    // defaultValue: false,
   }
},{
    sequelize
});

module.exports=Products