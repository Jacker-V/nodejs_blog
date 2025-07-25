const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    // [GET] /  
    index(req, res){
        // res.render('home');
        Course.find({})
            .then(courses => {
                res.render('home',{
                    courses: mutipleMongooseToObject(courses)
                });
                
            })
            .catch(err => {
                res.status(400).json({error: "Error!"})
            })
            
        //     function (err, course) {
        //     if (!err) {
        //         res.json(course);
        //     }else{
        //         res.status(400).json({error: 'Error'});
        //     }
        // });
    }
    // [GET] / search
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteController();