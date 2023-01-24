const mongoose = require('mongoose');
var Employee = mongoose.model('Employee',{

    name: {type: 'string'},
    position: {type: 'string'},
    office: {type: 'string'},
    salary: {type: 'number'},
}); 

module.exports = {Employee};