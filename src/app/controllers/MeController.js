const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    // [GET] / me
    storedCourses(req, res, next){
        Course.find({})
            .then(courses => {
                res.render('me/stored-courses', {
                    courses : mutipleMongooseToObject(courses)
                });
            })
        
    }
}

module.exports = new MeController();