import express from 'express';

const movieController = express.Router();

movieController.get('/create', (req,res)=>{
  res.render('create');
})

movieController.get('/:movieId/details', (req,res)=>{
  let id = req.params.movieId;
  res.render('details');
})

export default movieController;