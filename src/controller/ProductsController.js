const ProductsModel = require('../model/ProductsModel');

// C = Create
const CreateProducts = (req, res) => {
    let reqBody = req.body;
    ProductsModel.create(reqBody, (err, data) => {
        if (err) {
            res.status(400).json({ status: "failed", data: err });
        } else {
            res.status(200).json({ status: "success", data: data });
        }
    });
};

// R = Read
const ReadProducts = (req, res) => {
    let Query = {};
    let Projection = "ProductName ProductCode Img unitPrice Qty TotalPrice";
    ProductsModel.find(Query, Projection, (err, data) => {
        if (err) {
            res.status(400).json({ status: "failed", data: err });
        } else {
            res.status(200).json({ status: "success", data: data });
        }
    });
};

// U = Update
const UpdateProducts = (req, res) => {
    let id = req.params.id;
    let reqBody = req.body;
    
    // Use findByIdAndUpdate for clarity and simplicity
    ProductsModel.findByIdAndUpdate(id, reqBody, { new: true }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "failed", data: err });
        } else if (!data) {
            res.status(404).json({ status: "failed", message: "Product not found" });
        } else {
            res.status(200).json({ status: "success", data: data });
        }
    });
};

// D = Delete
const DeleteProducts = (req, res) => {
    let id = req.params.id;

    // Use findByIdAndDelete for clarity and better handling
    ProductsModel.findByIdAndDelete(id, (err, data) => {
        if (err) {
            res.status(400).json({ status: "failed", data: err });
        } else if (!data) {
            res.status(404).json({ status: "failed", message: "Product not found" });
        } else {
            res.status(200).json({ status: "success", message: "Product deleted successfully", data: data });
        }
    });
};

// Export all functions
module.exports = { CreateProducts, ReadProducts, UpdateProducts, DeleteProducts };
