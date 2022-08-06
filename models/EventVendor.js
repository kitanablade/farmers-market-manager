const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class EventVendors extends Model {}

EventVendors.init(
  {
    event_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Event',
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

module.exports = EventVendors;
