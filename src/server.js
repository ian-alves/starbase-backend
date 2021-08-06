const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const server = express();

mongoose.connect('mongodb://localhost:27017/starbase?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', { useNewUrlParser: true, useUnifiedTopology: true });

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);
console.log('Server is running...');