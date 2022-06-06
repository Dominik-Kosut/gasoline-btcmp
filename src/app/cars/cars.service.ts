import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Car } from "./car.module";

@Injectable({providedIn: "root"})
export class CarsService{
    constructor(private http: HttpClient){}

    private apiServerUrl = environment.apiBaseUrl;
    private currentCarId: number;
    carChange = new Subject<boolean>();


    getAllCars(){
        return this.http.get<Car[]>(this.apiServerUrl + '/cars');
    }

    getCarById(id: number){
        return this.http.get<Car>(this.apiServerUrl + `/cars/${id}`);
    }

    deleteCarById(id: number){
        return this.http.delete<boolean>(this.apiServerUrl + `/cars/${id}`);
    }

    addNewCar(newCar: Car){
        return this.http.post<Car>(this.apiServerUrl + '/cars', newCar);
    }

    updateCar(id: number, car: Car){
        return this.http.put<Car>(this.apiServerUrl + `/cars/${id}`, car);
    }

    getCarId(){
        return this.currentCarId;
    }

    setCarId(id: number){
        this.currentCarId = id;
    }
}