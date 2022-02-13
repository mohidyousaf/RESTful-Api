const http= require('http');
const app = require('./app')
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/myapp');
const connection= mongoose.connection;
connection.once('open',()=>{
    console.log('db connected');
});


const port = process.env.port || 5000;


const server= http.createServer(app);

server.listen(port);