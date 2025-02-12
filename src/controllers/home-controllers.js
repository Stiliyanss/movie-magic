import express from 'express';
import movieService from '../services/movie-service.js';


const router = express.Router();

router.get('/', async (req,res)=>{
  //*second solution use .lean in query to get plain objects
  const movies = await movieService.getAll();

//*first solution convert document to objects
//convert documents to plain object
// const plainMovies = movies.map(m=>m.toObject());

//*third solution is to use allowProtoPropertiesByDefault runtimeOption in handlebars
  res.render('home',{movies});
 });
 
 router.get('/about',(req,res)=>{
   res.render('about');
 });

export default router;

