const Course = require('../models/Course');

const { mongooseToObject } = require('../../util/mongoose');
class CoursesController {

    // [GET] / courses / :slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }
    // [GET] / courses / create
    create(req, res, next) {
        res.render('courses/create');
    }



    // [POST] / courses / store
    store(req, res, next) {
        //    res.render('courses/create');
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            })
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(courses => {
                res.render('courses/edit', {
                    courses: mongooseToObject(courses)
                });
            })
            .catch(next);
        
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({_id : req.params.id}, req.body)
            .then(() => {
                res.redirect('/me/stored/courses')
            })
            .catch(next)
        
    }
}

module.exports = new CoursesController();