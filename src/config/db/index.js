const mongoose = require('mongoose');

async function connect() {
    
    try {
        await mongoose.connect('mongodb://localhost:27017/It_f8');
        console.log("Connected DB");
        
    } catch (error) {
       console.log("Failed");
        
    }
}

module.exports = { connect };