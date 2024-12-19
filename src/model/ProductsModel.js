const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    ProductName: { type: String },
    ProductCode: { type: String },
    Img: { type: String },
    UnitPrice: { type: Number },
    Qty: { type: Number },
    TotalPrice: { type: Number },
    CreatedDate: { type: Date, default: Date.now }
},
{ versionKey: false });

const ProductsModel = mongoose.model('products', DataSchema);

module.exports = ProductsModel;
