const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

//connect to MongoDB
mongoose.connect(uri).then(
    async () =>{
        console.log(`Connected on mongo db`);
        app.listen(PORT, () =>{
            console.log(`connected to port ${PORT}`);
        });
    }
).catch((err) => {console.log(`Error connecting to database ${err}`)});



