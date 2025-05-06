const express = require("express");
const router = express.Router();

const productController = require('./controller/productController');

router.post('/create-product', (req, res) =>{
    productController.createProduct(req.body, (err, payload) =>{
        if (err) {
            res.status(500).json({ message: "Error", error: err });
          } else {
            res.json({ message: "success", data: payload});
          }
    })
});

router.get('/get-all-products', (req, res)=>{
    productController.getAllProducts((err, payload)=>{
        if (err) {
            res.status(500).json({ message: "Error", error: err });
          } else {
            res.json({ message: "success", data: payload});
          }
    })
});

router.get('/get-product-by-id/:id', (req, res) =>{
    productController.getProductByID(req.params.id, (err, payload)=>{
        if (err) {
            res.status(500).json({ message: "Error", error: err });
          } else {
            res.json({ message: "success", data: payload});
          }
    })
});

router.put('/update-product-by-id/:id', (req, res) =>{
    productController.updateProductByID(req.params.id, req.body, (err, payload) =>{
        if (err) {
            res.status(500).json({ message: "Error", error: err });
          } else {
            res.json({ message: "success", data: payload});
          }
    })
});

router.delete('/delete-product-by-id/:id', (req, res) =>{
    productController.deleteProductByID(req.params.id, (err, payload) =>{
        if (err) {
            res.status(500).json({ message: "Error", error: err });
        } else {
            res.json({ message: "success", data: payload});
        }
    })
});


module.exports = router;