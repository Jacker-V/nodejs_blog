const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class CoursesController {
    
    // [GET] / courses / :slug
    show(req, res){
        res.send("Course")
    }
}   

module.exports = new CoursesController;