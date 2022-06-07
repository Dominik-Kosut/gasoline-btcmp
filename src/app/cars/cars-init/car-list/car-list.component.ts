import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/users/users.service';
import { Car } from '../../car.module';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private usersServ: UsersService,
              private carsServ: CarsService,
              private router: Router,
              private route: ActivatedRoute) { }

  cars: Car[];

  ngOnInit(): void {
    console.log(this.usersServ.getUserId());
    this.getAllCars();
    this.carsServ.carChange.subscribe({
      next: (status: boolean) => {
        this.getAllCars();
      }
    });
  }

  onAddNewCar(){
  this.router.navigate(['new-car'], {relativeTo: this.route})
  }

  private getAllCars(){
    this.carsServ.getAllCars().subscribe({
      next: (response: Car[]) => {
        this.cars = response;
      }
    });
  }

}
