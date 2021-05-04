// require our modules (like express)
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;
const indexRouter = require('./routes/index');
const ingredientCatsRouter = require('./routes/ingredientcats');
const margaritasRouter = require('./routes/margaritas');

//load dnv variables
require('dotenv').config();

// initialize the express app
const app = express();

// DB connection

require('./config/database')


// configure application settings app.set()
app.set('view engine', 'ejs');


// mount our middleware app.use()
app.use(morgan('dev')); // http logger middleware
app.use(express.static('public')); // this is how we serve css, imgs & js
app.use(express.urlencoded({ extended: false })); // this is how we process html5 form data
// ^ this middleware turns our form data into req.body
app.use(methodOverride('_method'));


app.use(function(req, res, next) {
    req.time = new Date().toLocaleTimeString();
    next();
});

// mount our routes app.use(), tie views directories to routers app.use('view dir', router defined above)

app.use('/', indexRouter);
app.use('/ingredientcats', ingredientCatsRouter);

app.use('/margaritas', margaritasRouter);



// tell the app to listen on a port for requests
// port will be used to run node process
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});
