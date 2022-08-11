# farmers-market-manager

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    
## Description

Farmers' Market Manager is a full stack event management system built in Node.JS.  We aim to fill a gap in the ecommerce, POS, and inventory management markets by creating a one stop shop for small businesses to organize and manage their operations across multiple events and locations.  V1 allows for a vendor to register themselves and add product which users can freely explore without creating an account.  Using Express, Sequelize, Handlebars, and sessions, we were able to make lightweight application with password and session protected features for vendors.

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Future Developments](#future-developments)
* [Usage](#usage)
* [GitHub](#github)
* [License](#license)

## Installation
Farmers' Market Manager uses a number of npm packages for it's functionality.  All of the dependencies can be bulk installed in the terminal from the package.json with the following command:

```
npm install
```

To individually install dependencies, run:

```
npm install <package name>
```

with the npm packages name following install.

## Future Developments
V1 allows for the creation of a vendor and associated products, but it doesn't allow for the vendor to add themselves to an event;  currently this feature can only be implemented from the backend and is our first goal for future development.  After that, we would like to implement an Event Administrator feature which would allow for the events to be managed individually.  Beyond that we plan to create a "User" feature which would allow customers to create an account and reserve/purchase items from Vendors.

## Usage
Open the app by clicking link below or, if downloaded, on localhost 3000.
* https://farmersmarketmanager.herokuapp.com/

## Github
* https://github.com/kitanablade/farmers-market-manager

## License

MIT License