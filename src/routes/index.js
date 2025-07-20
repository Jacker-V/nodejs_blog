
const coursesRouter = require('./courses');
const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

    app.get('/news', newsRouter);
    app.get('/courses', coursesRouter);

    // app.use('/search', newsRouter); 
    app.get('/', siteRouter);


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