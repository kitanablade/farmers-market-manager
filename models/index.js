const Vendor = require("./Vendor");
const Product = require("./Product");
const Event = require("./Event");

// Vendor belongToMany Event (through EventVendor)
Vendor.belongsToMany(Event, {
  through: "EventVendor",
});

// Event belongToMany Vendor (through EventVendor)
Event.belongsToMany(Vendor, {
  through: "EventVendor",
});

// Vendor belongToMany Event (through EventVendor)
Product.belongsToMany(Vendor, {
    through: "ProductVendor",
  });
  
  // Event belongToMany Vendor (through EventVendor)
  Vendor.belongsToMany(Product, {
    through: "ProductVendor",
  });

module.exports = {
  Event,
  Vendor,
  Product,
};
