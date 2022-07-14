import { City } from "./City";
import { Vehicle } from "./Vehicle";


export class Travels {
    id?: number;
    date: Date;
    cityID: number;
    vehicleID: number;
    City?: City;
    Vehicle?: Vehicle;
}