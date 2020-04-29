const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const CourseModel = require('../model/course.model');

router.get('/list',(req,res)=>{

    CourseModel.find((err, docs)=>{
    if(!err){
        console.log(docs);
        res.json("list",{data:docs}) 
    }
    });
    //res.send("course controller");
});

router.post('/add', async (req,res) =>{
 var data = new CourseModel();
 data.courseName = req.body.courseName;
 data.courseDuration = req.body.courseDuration;
 data.courseFee = req.body.courseFee;
 data.courseID = Math.ceil(Math.random()*100000000);
const abc =  await data.save()
res.json({ success:abc })
//  data.save((err,docs)=>{
//      if(!err){
//         res.json({ success:docs })
//      }
//      else{
//          res.send("error occured");
//      }
//  });

 console.log('shjhv');
});

// router.get('/add',(req,res) =>{
//     res.render('addcourse');
// });


module.exports = router;