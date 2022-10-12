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
mongoose
.connect (process.env.MONGO_CONNECTION_URL, connectionParams)
.then( () => {
    console.info ("Connected to the DB");
})

.catch((e) => {
console.log ("Error:", e)
});
}


module.exports = connectDB;