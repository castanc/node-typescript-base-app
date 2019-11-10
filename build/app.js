"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
const express = require("express");
//import services = require('./services/car-rental.service')
const car_rental_service_1 = require("./services/car-rental.service");
// Create a new express application instance
const app = express();
const carRentalService = new car_rental_service_1.CarRentalService();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', (req, res) => {
    return res.send('Hello World!');
});
app.get('/LoadCars', (req, res) => {
    debugger;
    return res.send(carRentalService.LoadCars());
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
