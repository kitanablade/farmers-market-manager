const sequelize = require("../config/connection");

const {Event, Vendor, Product} = require("../models");

const events = [
    {
        eventName:"Redmond Saturday Market",
        location:"Redmond, WA",
        description:"Farmer's market with a mix of produce, food, and crafts vendors. Dog-friendly.",
    },
    {
        eventName:"University Farmer's Market",
        location:"U-District, Seattle, WA",
        description:"Farmer's market with a mix of produce, food, and crafts vendors. Dog friendly.",
    },
    {
        eventName:"Seafair",
        location:"Seattle Center",
        description:"Major event with vendors of all types.",
    },
    {
        eventName:"PAX West",
        location:"Washington State Convention Center",
        description:"Video games, tourneys, meetups, concerts, vendors, esports, cosplay, and more.",
    }
]

const vendors = [
    {
        vendorName:"Sky Valley Farm",
        email:"skyvalley@skagit.com",
        password:"password",
        description:"A family-owned berry farm in Skagit County.",
    },
    {
        vendorName:"Gone to Seed",
        email:"gonetoseed@seeds.com",
        password:"password",
        description:"Purveyor of many types of vegetables from Yakima.",
    },
    {
        vendorName:"Wargamer",
        email:"wargamers@dandd.com",
        password:"password",
        description:"Supplying D&D dice for players around the world.",
    },
    {
        vendorName:"Marination Ma Kai",
        email:"marination@kauai.com",
        password:"password",
        description:"Hawaiian-themed food truck. Loco Moco, Kimchi Rice, Shaved Ice, and more.",
    },
    {
        vendorName:"Wise Guy",
        email:"wiseguy@heroes.com",
        password:"password",
        description:"Sausage, pepper and onion hero in a hollowed-out baguette.",
    },
]

const products = [
    {
        productName:"Yukon Gold Potatoes",
        description:"",
        inStock:true,
        VendorId:1
    },
    {
        productName:"Strawberries",
        description:"",
        inStock:true,
        VendorId:2
    },
    {
        productName:"Hero Sandwich",
        description:"",
        inStock:true,
        VendorId:5
    },
    {
        productName:"D-20 Dice",
        description:"",
        inStock:true,
        VendorId:3
    },
]



const seedMe =async()=>{
    await sequelize.sync({force:true});

    const eventObj = await Event.bulkCreate(events);
    const vendorObj = await Vendor.bulkCreate(vendors,{individualHooks:true});
    const productObj = await Product.bulkCreate(products);

    const redmondMkt = eventObj[0];
    const univMkt = eventObj[1];
    const seafair = eventObj[2];
    const pax = eventObj[3];

    const goneToSeed = vendorObj[1];
    const wargamer = vendorObj[2];
    const marination = vendorObj[3];
    const wiseGuy = vendorObj[4];

    await redmondMkt.addVendors([1,2,5]); 
    await univMkt.addVendors([1,2,4,5])
    await seafair.addVendors([3,4,5])
    await pax.addVendors([3,5])

    console.log("seeding complete!")
    process.exit(0);
}


seedMe()