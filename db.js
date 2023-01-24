const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ranaweera:1234@facebook.8hivl.mongodb.net/test',(err)=>{
    if(!err){
            console.log("MongoDB connection established");
            
        }
        else{
                    console.log("MongoDB connection failed");
                }

});
mongoose.exports = mongoose;