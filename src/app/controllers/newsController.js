class newsController {
    // [GET] /news 
    index(req, res){
        res.render('news')
    }

    show(req, res){
        res.send('NEW DETAIL!!!');
    }
}

module.exports = new newsController();