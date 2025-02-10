import express from 'express';
import movieService from '../services/movie-service.js';

const movieController = express.Router();

movieController.get('/create', (req,res)=>{
  res.render('create');
})

movieController.get('/:movieId/details', (req,res)=>{
  let movieId = req.params.movieId;
  const movie = movieService.findOne(movieId); 

  res.render('details');
})

export default movieController;