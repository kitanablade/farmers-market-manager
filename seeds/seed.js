const sequelize = require("../config/connection");

const {Events, Vendors, Products} = require("../models");

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
        description:"A family-owned berry farm in Skagit County.",
    },
    {
        vendorName:"Gone to Seed",
        description:"Purveyor of many types of vegetables from Yakima.",
    },
    {
        vendorName:"Wargamer",
        description:"Supplying D&D dice for players around the world.",
    },
    {
        vendorName:"Marination Ma Kai",
        description:"Hawaiian-themed food truck. Loco Moco, Kimchi Rice, Shaved Ice, and more.",
    },
    {
        vendorName:"Wise Guy",
        description:"Sausage, pepper and onion hero in a hollowed-out baguette.",
    },
]

const products = [
    {
        productName:"Yukon Gold Potatoes",
        description:"",
        image: "",
    },
    {
        productName:"Strawberries",
        description:"",
        image: "",
    },
    {
        productName:"Hero Sandwich",
        description:"",
        image: "",
    },
    {
        productName:"D-20 Dice",
        description:"",
        image: "",
    },
]



const seedMe = async ()=>{
    await sequelize.sync({force:true});
    await User.bulkCreate(users,{individualHooks:true})
    await Gobble.bulkCreate(gobbles)
    process.exit(0)
}

seedMe()