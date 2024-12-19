const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    ProductName: { type: String, required: true },
    ProductCode: { type: String, required: true },
    Img: { type: String, required: true },
    UnitPrice: { type: Number, required: true },
    Qty: { type: Number, required: true },
    TotalPrice: { type: Number, required: true },
});

const ProductsModel = mongoose.model('Product', ProductsSchema);
module.exports = ProductsModel;
