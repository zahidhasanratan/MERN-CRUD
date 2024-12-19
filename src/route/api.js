const express = require('express');
const ProductsController = require('../controller/ProductsController');

const router = express.Router();

//C=Create
router.post("/CreateProduct",ProductsController.CreateProducts);

// router.post("/CreateProduct", (req, res) => {
//     console.log("POST /CreateProduct route hit");
//     res.status(200).json({ status: "success", message: "Route is working!" });
// });


//R=Read
router.get("/ReadProduct",ProductsController.ReadProducts);

//U=Update
router.post("/UpdateProduct/:id",ProductsController.UpdateProducts);

//D=Delete
router.get("/DeleteProduct/:id",ProductsController.DeleteProducts);

//Test
router.get('/test', (req, res) => {
    res.status(200).json({ message: 'Server is running and routes are accessible!' });
});

//API Routing End Point 

module.exports=router;