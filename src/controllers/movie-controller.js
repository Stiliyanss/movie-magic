import express from 'express';
import movieService from '../services/movie-service.js';

const movieController = express.Router();

movieController.get('/search', async (req,res)=>{
  const filter = req.query;  
  const movies = await movieService.getAll(filter);

  res.render('search',{movies, filter});  
});

movieController.get('/create', (req,res)=>{
  res.render('create');
});

movieController.post('/create', (req,res)=>{
   const newMovie = req.body;
  movieService.create(newMovie);
   res.redirect('/');
})

movieController.get('/:movieId/details',async (req,res)=>{
  let movieId = req.params.movieId;
  const movie = await movieService.getOne(movieId); 

  res.render('details', {movie});
})

export default movieController;