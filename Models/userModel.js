let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,

},{timestamps:true});   // (timestamps)when upadting or change will occur then time will stored as well

// Model_name(collection name) is pwskilluser here and userModel is collection
const userModel = mongoose.model('pwskilluser',UserSchema);

module.exports = userModel;