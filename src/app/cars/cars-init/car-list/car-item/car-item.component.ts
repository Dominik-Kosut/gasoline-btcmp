import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/cars/car.module';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  constructor() { }

  @Input('carInfo') car: Car;

  ngOnInit(): void {
  }

}
