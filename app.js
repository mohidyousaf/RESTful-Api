const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser= require('body-parser');



const product = require('./api/routes/product');
const order= require('./api/routes/order');
const res = require('express/lib/response');

app.use(morgan('dev'))
// app.use(bodyparser.urlencoded({extended:false}));
// app.use(bodyparser.json());  
app.use(express.json())   


app.use('/product', product);
app.use('/order', order);



//error handling

app.use((req,resp,next)=>{

    const error= new Error('Congrats! RESTful API successfully deployed on heroku');
    error.status= 404;
    next(error);

})

app.use((error,req,resp,next)=>{
    resp.status(error.status || 500).json({
       error : error.message
    })

})

module.exports= app