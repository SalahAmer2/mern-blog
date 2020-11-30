const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MONGODB_URI');

const connectDB = async () => {
    try {
        
        await mongoose.connect(db || "mongodb://localhost:27017/mernblog", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected!');
        
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;
