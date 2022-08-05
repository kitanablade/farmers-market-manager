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
    await Event.bulkCreate(events);
    await Vendor.bulkCreate(vendors);
    await Product.bulkCreate(products);
    // const productObj = await Event.bulkCreate(products);
    // const vendorObj = await Vendor.bulkCreate(vendors);
    console.log("seeding complete!")
    //const firstProduct = productObj[0]
    // const  firstVendor = vendorObj[0];
    // await firstVendor.addEvent(2)
    // await firstVendor.addProduct([1,2])
    // process.exit(0);
}


seedMe()