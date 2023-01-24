const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {mongoose } = require('./db');
var employeeController = require('./models/controllers/employeeController');

const app = express();
app.use(cors({ origin: 'http://localhost:4200'}));

app.listen(3000, ()=>console.log('Service listening on port: 3000'));

app.use(bodyParser.json());
app.use('/employees', employeeController);
