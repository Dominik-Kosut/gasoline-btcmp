import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/users/users.service';
import { Car } from '../../car.module';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit, OnDestroy {

  constructor(private usersServ: UsersService,
              private carsServ: CarsService,
              private router: Router,
              private route: ActivatedRoute) { }

  cars: Car[];
  carObs: Subscription;
  userId: number;

  ngOnInit(): void {
    this.userId = this.usersServ.getUserId();
    this.getAllCars(this.userId);
    this.carObs = this.carsServ.carChange.subscribe({
      next: (response: boolean) => {
        this.getAllCars(this.userId);
      }
    });
  }

  ngOnDestroy(): void {
    this.carObs.unsubscribe();
  }

  onAddNewCar(){
  this.router.navigate(['new-car'], {relativeTo: this.route})
  }

  private getAllCars(id: number){
    this.carsServ.getAllUsersCars(id).subscribe({
      next: (response: Car[]) => {
        this.cars = response;
      }
    });
  }

}
