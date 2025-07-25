
const coursesRouter = require('./courses');
const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);

    // app.use('/search', newsRouter); 
    app.use('/', siteRouter);


    // app.get('/', (req, res) => {
    //     res.render('home')
    // })

    

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // })

    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     console.log(req.body.gender);


    //     res.send('');
    // })
}

module.exports = route;