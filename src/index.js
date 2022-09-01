const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
var bodyParser = require('body-parser');
const userRoutes = require('./routes/user'); 

const app = express();

const port = process.env.PORT | 9000;

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', userRoutes);

//routes
app.get('/', (req, res) => {
    res.send('welcome to my api');
});


//mongoDB connection
mongoose.connect('mongodb+srv://croosner:developer123456789@cluster0.44au2.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('connected'))
  .catch((error) => console.error(error))

app.listen(port, () => console.log('server listening on port' , port));