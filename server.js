
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");


// Note: that we can also import module ( import mongoose from "mongoose" )
// like this:  const express = required("express")
// after we have done that, the only thing we need to
// do is ro unable it for it to work the modern way
// we just need to add ("type": "module")  right below the ( "main": "server.js" ) and that's it.

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


// Routes
app.use('/posts', require('./routes/posts'));


// mongodb database connection
const URL = process.env.MONGODB_URL
mongoose.connect(URL, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, error => {
    if (error) throw error;
    console.log("Connection to DB is successful");
});


// YOU SHOULD HAVE THIS IF YOU ARE ONLY 
// DEPLOYING YOUR REST API TO HOROKU
// app.use('/', (req, res) => {
//     res.send("Welcome to my Simple RestFul API");
// });

// AND YOU MUST ADD THIS FILE: Procfile: and add web: npm run start
// NOTE THAT IF YOU ARE ONLY DEPLOYING UR RESTFUL API SERVER TO HOROKU, 
// YOU DO NOT NEED TO DO ANY OTHER EXTRA THING IN THE PACKAGE.JSON FILE
// JUST DO THESE ONE AND FORGET ABOUT THOSE OTHER ONE IN THE PACKAGE.JSON FILE


// Huroku configuration settions
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get('*', (req, res) => {
        res.sendFile(path.json(__dirname, "client", "build", "index.html"));
    })
}



// listening to port
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server have started on port`, PORT);
});




