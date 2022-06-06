import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from '../cars/cars.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy{

  constructor(private carsServ: CarsService,
              private router: Router) { }

  selectedCar: number;

  ngOnInit(): void {
    this.selectedCar = this.carsServ.getCarId();
    if(!this.selectedCar){
        this.router.navigate(['cars']);
    }
  }

  ngOnDestroy(): void {
    this.carsServ.setCarId(null);
  }

}
