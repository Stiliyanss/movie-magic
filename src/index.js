import express from "express";
import handlebars from "express-handlebars";
import mongoose  from "mongoose";

import routes from './routes.js';
import showRatingHelper from "./helpers/rating-helper.js";

const app = express();

//db configuration
try {
  const uri = 'mongodb://localhost:27017/magic-movies-jan2025';
  await mongoose.connect(uri);
  
  console.log('Successfully connected');
  
} catch (error) {
  console.log('There is an error with the connection');
  console.error(error.message);
}

//handlebars configuration
app.engine('hbs', handlebars.engine({
  extname:'hbs',
  helpers:{
    showRating:showRatingHelper
  }
}));
app.set('view engine', 'hbs');
app.set('views', './src/views');

// express configuration
app.use('/static',express.static('src/public'));
app.use(express.urlencoded({extended:false}));

//setup routes
app.use(routes);


app.get('*', (req,res)=>{
  res.render('404');
})

//start server
app.listen(5000, ()=> console.log('server is listening on http://localhost:5000...'));