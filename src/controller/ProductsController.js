const ProductsModel = require('../model/ProductsModel');


// C = Create
// const CreateProducts = (req, res) => {
//     console.log("CreateProducts function invoked");
//     console.log("Request body:", req.body);

//     // Test response to confirm the function is working
//     res.status(200).json({ status: "success", message: "CreateProducts handler is working!" });
// };

// const CreateProducts = (req, res) => {
//     let reqBody = req.body;
//     ProductsModel.create(reqBody, (err, data) => {
//         if (err) {
//             res.status(400).json({ status: "failed", data: err });
//         } else {
//             res.status(200).json({ status: "success", data: data });
//         }
//     });
// };

const CreateProducts = async (req, res) => {
    try {
        let reqBody = req.body;

        // Check for missing fields (basic validation)
        const { ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice } = reqBody;
        if (!ProductName || !ProductCode || !Img || !UnitPrice || !Qty || !TotalPrice) {
            return res.status(400).json({
                status: "failed",
                message: "All fields are required: ProductName, ProductCode, Img, UnitPrice, Qty, TotalPrice"
            });
        }

        // Create the product using the `create` method which now returns a Promise
        const data = await ProductsModel.create(reqBody);

        // Send the successful response
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        console.error("Error creating product:", err);  // Log the error to the server console
        res.status(400).json({ status: "failed", data: err.message });
    }
};



// R = Read
const ReadProducts = async (req, res) => {
    try {
        // Empty query retrieves all products
        let Query = {};  
        // Fields to return
        let Projection = "ProductName ProductCode Img unitPrice Qty TotalPrice";  

        // Use the `find()` method with Promises
        let data = await ProductsModel.find(Query, Projection);

        // Send success response
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        // Send error response
        res.status(400).json({ status: "failed", data: err.message });
    }
};


// const ReadProducts = (req, res) => {
//     ProductsModel.find({}, (err, data) => {
//         if (err) {
//             res.status(500).json({ status: "failed", message: "Internal Server Error", error: err });
//         } else {
//             res.status(200).json({ status: "success", data: data });
//         }
//     });
// };


// U = Update
// const UpdateProducts = (req, res) => {
//     let id = req.params.id;
//     let reqBody = req.body;

//     console.log("Update Request received");
//     console.log("ID:", id);
//     console.log("Request Body:", reqBody);

//     // Use findByIdAndUpdate for clarity and simplicity
//     ProductsModel.findByIdAndUpdate(id, reqBody, { new: true }, (err, data) => {
//         if (err) {
//             console.error("Error updating product:", err);
//             res.status(400).json({ status: "failed", data: err });
//         } else if (!data) {
//             res.status(404).json({ status: "failed", message: "Product not found" });
//         } else {
//             console.log("Updated Product:", data);
//             res.status(200).json({ status: "success", data: data });
//         }
//     });
// };

const UpdateProducts = async (req, res) => {
    let id = req.params.id;
    let reqBody = req.body;

    console.log("Update Request received");
    console.log("ID:", id);
    console.log("Request Body:", reqBody);

    try {
        // Use async/await with findByIdAndUpdate
        const updatedProduct = await ProductsModel.findByIdAndUpdate(id, reqBody, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ status: "failed", message: "Product not found" });
        }

        console.log("Updated Product:", updatedProduct);
        return res.status(200).json({ status: "success", data: updatedProduct });
    } catch (err) {
        console.error("Error updating product:", err);
        return res.status(400).json({ status: "failed", data: err.message });
    }
};


// D = Delete
const DeleteProducts = async (req, res) => {
    try {
        let id = req.params.id;

        // Use findByIdAndDelete with await
        let data = await ProductsModel.findByIdAndDelete(id);

        if (!data) {
            // If no product is found
            res.status(404).json({ status: "failed", message: "Product not found" });
        } else {
            // If product is successfully deleted
            res.status(200).json({ status: "success", message: "Product deleted successfully", data: data });
        }
    } catch (err) {
        // Handle errors
        res.status(400).json({ status: "failed", data: err.message });
    }
};


// Export all functions
module.exports = { CreateProducts, ReadProducts, UpdateProducts, DeleteProducts };
