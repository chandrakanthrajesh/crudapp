const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const CourseController = require('./controllers/course')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crudapp',{useNewUrlParser:true},(error) => {   //establishing the connection between mongodb and node js
    if(!error){
        console.log('Successfully Connected');
    }
    else{
        console.log('Error connecting to  database.');
    }
});

app.use(bodyparser.urlencoded({
    extended: true
}));

// app.set('views',path.join(__dirname,"/views/"));  //setting up the views folder to store views
// app.engine("hbs", expressHandlebars({  
//     extname : "hbs",
//     defaultLayout: "mainlayout",
//     layoutsDir: __dirname + "/views/layouts"
// }));

// app.set("view engine", 'hbs')

app.use("/course", CourseController);
app.listen(8000, ()=>{
console.log("Server started");
});


