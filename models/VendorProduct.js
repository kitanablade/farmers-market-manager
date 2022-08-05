const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class VendorProduct extends Model {}

VendorProduct.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id',
      },
    },
    vendor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Vendor',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    // timestamps: false,
    // freezeTableName: true,
    // underscored: true,
    // modelName: 'event_vendors',
  }
);

module.exports = ProductTag;
