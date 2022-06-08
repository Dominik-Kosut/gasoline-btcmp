import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users/users.service';
import { Car } from '../car.module';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  constructor(private router: Router,
              private carsServ: CarsService,
              private userServ: UsersService) { }

  @ViewChild('f') form: NgForm;

  ngOnInit(): void {}

  onSubmit(){
  console.log(this.form);

  // this.carsServ.addNewCar(
  //   new Car(0, this.form.value.type, this.form.value.color, this.form.value.fuel) 
  //   ).subscribe({
  //     next: () => {
  //     this.form.reset();
  //     this.router.navigate(['/cars']);
  //     this.carsServ.carChange.next(true);
  //     }
  //   });

    this.carsServ.addNewCarToOwner(
      this.userServ.getUserId(),
      new Car(0, this.form.value.type, this.form.value.color, this.form.value.fuel) 
    ).subscribe({
      next: (respo: Car) => {
      this.form.reset();
      this.router.navigate(['/cars']);
      this.carsServ.carChange.next(true);
      }
    });
  }

  

}
