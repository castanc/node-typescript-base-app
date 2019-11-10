// lib/app.ts
import express = require('express');
//import services = require('./services/car-rental.service')
import {CarRentalService} from './services/car-rental.service'

// Create a new express application instance
const app: express.Application = express();
const carRentalService = new CarRentalService();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/LoadCars', (req,res) =>{
  debugger;
  return res.send(carRentalService.LoadCars())
})

app.listen(3000, ()=> {
  console.log('Example app listening on port 3000!');
});
