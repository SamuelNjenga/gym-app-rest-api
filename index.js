const express = require('express');
const app = express();
require('dotenv/config');

const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
const path =require('path');
global.appRoot = path.resolve(__dirname);

const routes = require('./src/main/routes/')

app.use('/api/', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
