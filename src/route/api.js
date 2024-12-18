const express = require('express');
const ProductsController = require('../controller/ProductsController');

const router = express.Router();

//C=Create
router.post("/CreateProduct",ProductsController.CreateProducts);

//R=Read
router.get("/ReadProduct",ProductsController.ReadProducts);

//U=Update
router.post("/UpdateProduct/:id",ProductsController.UpdateProducts);

//D=Delete
router.get("/DeleteProduct/:id",ProductsController.DeleteProducts);

//API Routing End Point 

module.exports=router;