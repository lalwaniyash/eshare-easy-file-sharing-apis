const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
// Cors 
app.use(cors());

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.json());
const connectDB = require('./config/db');
connectDB();
// Template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));
app.use('/', (req, res) => {
    res.send(`
  <h1>Welcome to file-sharing-APIs</h1>
  `);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
