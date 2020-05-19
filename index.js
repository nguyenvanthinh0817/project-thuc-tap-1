require('dotenv').config();

var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//require routers
var authRoutes = require('./routes/auth.route');
var productRoutes = require('./routes/product.route');
//


// require middlewaves
var authMiddlewave = require('./middlewaves/auth.middlewave');
//


var port = 3000;
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');




///


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(express.static('public'));
//

app.use('/auth', authRoutes);
app.use('/products', productRoutes);//authMiddlewave.requireAuth


//

app.get('/', (req, res)=>{
	res.render('index');
});



app.listen(port, ()=>{console.log('server listen on port ' + port)});