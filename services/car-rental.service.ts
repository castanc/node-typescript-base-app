import {Car} from '../models/car'
import {Brand} from '../models/brand'
let fs = require('fs');

export class CarRentalService {
 
    //todo: make it async
     LoadCars():Array<Car> {
        return JSON.parse(fs.readFileSync('./data/cars.json', 'utf8')).
            filter((x: { Available: boolean; })=>x.Available == true);
        }

     LoadBrands():Array<Brand> {
        return JSON.parse(fs.readFileSync('./data/brands.json', 'utf8'));
        }
        
}