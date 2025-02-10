import express from 'express';
import homeController from './controllers/home-controllers.js';

const routes = express.Router();

routes.use(homeController);

export default routes;