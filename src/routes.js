import express from 'express';
import homeController from './controllers/home-controllers.js';
import movieController from './controllers/movie-controller.js';

const routes = express.Router();

routes.use(homeController);
routes.use(movieController);

export default routes;