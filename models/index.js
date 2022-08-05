const Vendors = require("./Vendors");
const Products = require("./Products");
const Events = require("./Events");

Vendors.hasMany(Products);
Products.belongsTo(Vendors);

Products.hasMany(Vendors);
Vendors.belongsTo(Products);

Events.hasMany(Vendors);
Vendors.belongsTo(Events);


module.exports={
    Events,
    Vendors,
    Products,
}