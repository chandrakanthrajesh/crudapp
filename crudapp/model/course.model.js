const mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
    courseName: {
        type:String,
        required: "Required"
    },
    courseID : {
        type: String
    },
    courseDuration: {
        type:String
    },
    courseFee: {
        type: String
    }
});

module.exports= mongoose.model("Course",CourseSchema)

