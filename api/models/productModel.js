const mongoose= require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const Schema= mongoose.Schema;

const product = Schema ({

    name:{
        type: String,
        required: true,
        unique:true
    },

    price:{
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Product",product)