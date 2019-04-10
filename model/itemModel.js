let mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema
let itemSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

//Create model based on the schema
let itemModel = mongoose.model('Item', itemSchema);

//Exports the model so it can be used in other files
module.exports = itemModel;