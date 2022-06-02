import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../car.module';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private carsSrv: CarsService,
              private router: Router) { }

  cars: Car[];

  ngOnInit(): void {
    this.getAllCars();
    this.carsSrv.carChange.subscribe({
      next: (status: boolean) => {
        this.getAllCars();
      }
    });
  }

  onAddNewCar(){
    this.router.navigate(['new-car'])
  }











  private getAllCars(){
    this.carsSrv.getAllCars().subscribe({
      next: (response: Car[]) => {
        this.cars = response;
      }
    });
  }

}
