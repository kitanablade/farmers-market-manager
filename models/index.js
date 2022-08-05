const Vendor = require("./Vendor");
const Product = require("./Product");
const Event = require("./Event");

Vendor.belongsToMany(Event,{
  through:"EventVendor"
})

Event.belongsToMany(Vendor,{
  through:"EventVendor"
})

Vendor.hasMany(Product)
Product.belongsTo(Vendor)

module.exports={
    Event,
    Vendor,
    Product,
}