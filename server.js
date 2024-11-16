// importing express
var express = require("express");
var app = express();
const router = require("./Routes/userRoute");
var bodyParser = require("body-parser");
// importing dotenv 
var dotenv = require("dotenv");
dotenv.config();    // configuring dotenv
var mongoose = require("mongoose");


// for cookie => app.use(cookieParser);
app.use(bodyParser.json());    // middleware that will parse the body coming from api into json format(understand json object coming from through api)
app.use(bodyParser.urlencoded({extended:true}));  // middleware that will encode the url in a body

// Connecting with the database
mongoose.connect('mongodb+srv://Anmol:123Anmol@cluster0.bzxvg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    // strings option(mandatory)
    useUnifiedTopology:true,   //Set to true to use the new Server Discovery and Monitoring engine.
    useNewUrlParser:true      // Set to true to use the new MongoDB connection string parser.
}).then(() =>{
    console.log("Connected to DB");
});

// Let say http://localhost:5002/api/v1/user/signup then it will called but if http://localhost:5002/api/v1/student/signup then this will called i.e this middleware ensures that correct candidate login and for that diff api called
app.use('/api/v1/user',router);   // router middleware (works when api call for user)

// Starting the server
app.listen(process.env.PORT, ()=>{     // process.env.PORT - it will get the PORT from .env file and place here(for using the data in the env file we have to import the dotenv and configure it)
    console.log(`listening to port ${process.env.PORT}`);
});





// Packages we need to install: npm i nodemon body-parser jsonwebtoken express mongoose dotenv 