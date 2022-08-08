const sequelize = require("../config/connection");

const {Event, Vendor, Product} = require("../models");

const events = [
    {
        eventName:"Redmond Saturday Market",
        location:"Redmond, WA",
        description:"Farmer's market with a mix of produce, food, and crafts vendors. Dog-friendly."
    },
    {
        eventName:"University Farmer's Market",
        location:"U-District, Seattle, WA",
        description:"Farmer's market with a mix of produce, food, and crafts vendors. Dog friendly."
    },
    {
        eventName:"Seafair",
        location:"Seattle Center",
        description:"Major event with vendors of all types."
    },
    {
        eventName:"PAX West",
        location:"Washington State Convention Center",
        description:"Video games, tourneys, meetups, concerts, vendors, esports, cosplay, and more."
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
    },
    {
        productName:"Strawberries",
        description:"",
        inStock:true,
    },
    {
        productName:"Hero Sandwich",
        description:"",
        inStock:true,
    },
    {
        productName:"D-20 Dice",
        description:"",
        inStock:true,
    },
]



const seedMe =async()=>{
    await sequelize.sync({force:true});

    const eventObj = await Event.bulkCreate(events);
    const vendorObj = await Vendor.bulkCreate(vendors,{individualHooks:true});
    //const productObj = await Product.bulkCreate(products);

    const redmondMkt = eventObj[0];
    //const goneToSeed = vendorObj[0];
    // const seafair = eventObj[2];
    // const pax = eventObj[3];

    // const goneToSeed = vendorObj[1];
    // const wargamer = vendorObj[2];
    // const marination = vendorObj[3];
    // const wiseGuy = vendorObj[4];

    // const potatoes = productObj[0];
    // const strawberries = productObj[1];
    // const heroSand = productObj[2];
    // const dice = productObj[3];

    await redmondMkt.addVendor([0,1,4]);
    
    // await seafair.addVendors([2,3,4])
    // await pax.addVendors([2,4])

    console.log("seeding complete!")
    process.exit(0);
}


seedMe()