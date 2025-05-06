const Product = require('../model/Product');

module.exports = {
    createProduct: (body, callback) =>{
        const newProduct = new Product({
            productName : body.productName
        });

        newProduct.save((err, payload) =>{
            if(err){
                callback(err, null);
            }else{
                callback(null, payload);
            }
        })

    },

    getAllProducts: (callback)=>{
        Product.find({}, (err, payload)=>{
            if(err){
                callback(err, null);
            }else{
                callback(null, payload);
            }
        })
    },

    getProductByID: (id, callback)=>{
        Product.findById({_id: id}, (err, payload)=>{
            if(err){
                callback(err, null);
            }else{
                callback(null, payload);
            }
        })
    },

    updateProductByID: (id, body, callback) =>{
        Product.findByIdAndUpdate({_id:id}, body, {new:true}, (err, payload) =>{
            if(err){
                callback(err, null);
            }else{
                callback(null, payload);
            }
        })
    },

    deleteProductByID: (id, callback) =>{
        Product.findByIdAndRemove({_id:id}, (err, payload) =>{
            if(err){
                callback(err, null);
            }else{
                callback(null, payload);
            }
        })
    }
}