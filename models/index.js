const Vendor = require("./Vendor");
const Product = require("./Product");
const Event = require("./Event");
const EventVendor = require("./EventVendor");

// Vendors belongToMany Events (through EventVendor)
Vendor.belongsToMany(Event, {
    through: EventVendor,
    foreignKey: 'event_id',
  });
  
  // Events belongToMany Vendors (through EventVendors)
  Event.belongsToMany(Vendor, {
    through: EventVendor,
    foreignKey: 'vendor_id',
  });
  


module.exports={
    Event,
    Vendor,
    Product,
}