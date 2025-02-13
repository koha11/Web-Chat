const express = require('express');
const route = require('./routes');
const path = require('path');

//database
// const db = require('/config/db');

//middleware
// const methodOverride = require('method-override');
// const cookieParser = require('cookie-parser');
// const authJwt = require('/middlewares/authJwt');

//khoi tao server
const app = express();
const port = 1000;

// xu li file tinh
app.use(
  express.static(path.join(__dirname.slice(0, __dirname.length - 4), 'public'))
);
app.use(express.static('node_modules'));

// Cấu hình Pug
app.set('view engine', 'pug'); // Sử dụng Pug làm template engine
app.set('views', path.join(__dirname, 'views')); // Thư mục chứa file Pug
//xu li du lieu tu form (dua vao middleware duoc xay dung san cua express js)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//middleware giup ghi de` cac phthuc khac len pthuc post hoac get cua form
// app.use(methodOverride('_method'));

//middleware giup giai ma cookies
// app.use(cookieParser());

//middleware giup vertify tokens
// app.use(authJwt.verifyToken);

//ket noi va khoi tao db
// db.connect();

// Init route
route(app);
app.listen(port, () => console.log('Listening localhost:1000'));
