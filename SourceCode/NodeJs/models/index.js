const mongoose = require("mongoose");
require('dotenv').config();
const { dbName, host } = process.env;
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = `mongodb://${host}:27017/${dbName}`;
db.user = require("./user.model.js")(mongoose);
db.chatBot = require("./chatBot.model.js")(mongoose);
db.product = require("./product.model.js")(mongoose);
db.orders = require("./orders.model.js")(mongoose);
db.cart = require("./cart.model.js")(mongoose);
db.signature = require("./signature.model.js")(mongoose);
db.wishlist = require("./wishlist.model.js")(mongoose);
db.admin = require("./admin.model.js")(mongoose);
db.category = require("./category.model")(mongoose);
db.subCategory = require("./subCategory.model")(mongoose);
db.brand = require("./brand.model")(mongoose);
db.notification = require("./notification.model")(mongoose);
db.homeImage=require("./homeImage.model.js")(mongoose);
module.exports = db;