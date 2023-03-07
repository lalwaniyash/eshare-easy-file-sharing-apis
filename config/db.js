require('dotenv').config();
const mongoose = require("mongoose");

// function connectDB() {
//     // Database connection
//     mongoose.connect(process.env.MONGO_CONNECTION_URL).then(() => {
//         console.log(`connection successful`);
//     }).catch((err) => console.log(`no connection`));
// }

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

function connectDB() {
    mongoose.connect(process.env.MONGO_CONNECTION_URL).then( ()=> {
        console.log(`connection successful`); 
    }).catch((err)=> console.log(`no connection`));
}


module.exports = connectDB;
