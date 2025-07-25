const path = require('path');
const express = require('express');
const morgan = require('morgan');// Ghi lại log và request trên server
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');


db.connect();
// Cau hinh -- No kiem tra den path public, sau do tren url ma go them duong dan gi thi se truy cap den do
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded());// gửi dữ liệu dạng form lên server
app.use(express.json()); // Gửi dữ liệu dạng js lên server
app.use(methodOverride('_method'));


// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('handlebars',engine({
  helpers: {
    sum: (a,b) => a+b,
  }
}));
app.set('view engine','handlebars');
app.set('views', path.join(__dirname,'resource/views'));
// console.log(path.join(__dirname,'resource/views'));


// Khởi tạo tuyến đường
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})