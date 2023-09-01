const bodyParser = require("body-parser");
const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.model = require("./model.js")(mongoose);
db.todolist = require("./todolist.js")(mongoose);


module.exports = db;