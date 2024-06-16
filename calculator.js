// require the express package
const express = require("express");
const bodyParser = require("body-parser");

// whenever we refer to the app it will be a sortcut to the express package
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// setup the root of the page
app.get("/", function(req, res){
    // const dirname will give us the filepath of the current file( this helps for other computers)
    res.sendFile(__dirname + "/index.html");
});

// now we are going to make a post request that will process any responses to the root
app.post("/", function(req, res){

    // grab both the numbers from the input boxes
    // it will always be retuned as text so we need to type change(type casting)
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    // this will be sent to the server to be seen by the user
    res.send("The result of that calculation is " + result);
});

app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalulator.html");
});

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmiResult = weight / (height*height);

    res.send("Your BMI is " + bmiResult);
});

// create a server on port 3000 and create a call back function to console
// basically this will listen for any browsers trying to connect to port 3000
// this is basically the root or homepage
app.listen(3000, function(){
    console.log("Server started on port 3000");
});

// to run the server manually use cmd: node calculator.js
// to run the server to update automatically with nodemon use cmd: nodemon calculator.js