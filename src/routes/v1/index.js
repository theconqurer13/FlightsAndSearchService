const express = require('express');
const CityController = require('../../controllers/city-controller');
const AirportController = require("../../controllers/airport-controller");
const FlightController = require('../../controllers/flight-controller');

const { FlightMiddlewares } = require('../../middlewares/index');

const router = express.Router();
router.post('/city', CityController.create);
router.delete('/city/:id',CityController.destroy);  
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);

router.post(
    '/flights', 
    FlightMiddlewares.validateCreateFlight, 
    FlightController.create
);

router.post('/flights',FlightController.create);
router.get('/flights', FlightController.getAll);
router.get('/flights/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);


router.post('/airport', AirportController.create);
router.delete('/airport/:id',AirportController.destroy);  
router.get('/airport/:id',AirportController.get);
router.patch('/airport/:id',AirportController.update);

module.exports= router;

