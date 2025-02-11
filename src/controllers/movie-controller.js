import express from 'express';
import movieService from '../services/movie-service.js';

const movieController = express.Router();

movieController.get('/search',(req,res)=>{
  res.render('search');
})

movieController.get('/create', (req,res)=>{
  res.render('create');
});

movieController.post('/create', (req,res)=>{
   const newMovie = req.body;
  movieService.create(newMovie);
   res.redirect('/');
})

movieController.get('/:movieId/details', (req,res)=>{
  let movieId = req.params.movieId;
  const movie = movieService.findOne(movieId); 

  res.render('details', {movie});
})

export default movieController;