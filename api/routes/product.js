const express= require('express');
const router = express.Router();
const bodyparser= require('body-parser');
const Product= require('../models/productModel');

router.get('/',(req,resp)=>{

    resp.status(200).json({
        message: 'get request working'
    })  

});

router.post('/',(req,resp,next)=>{

    const product = new Product({
        name: req.body.name,
        price: req.body.price
    });


    //save is model function of mongoose, and we return a promise or catch errors
    product.save().then(()=>{
        console.log('product is added');
        
        resp.status(201).json({
            message: 'post  request working',
            createdProduct: product   
        });

    })
    .catch((err)=>{
        next(err);
    })

});

router.get('/:id',(req,resp)=>{
    const id= req.params.id;

    resp.status(200).json({
        message: `id is ${id}`
    })

})


module.exports= router;