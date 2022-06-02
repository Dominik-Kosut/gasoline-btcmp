import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car.module';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
  constructor(private carsSrv: CarsService,
              private route: ActivatedRoute,
              private router: Router) { }

  @ViewChild('f') signupForm: NgForm;

  car: Car;

  ngOnInit(): void {
    this.carsSrv.getCarById(+this.route.snapshot.params['id']).subscribe({
      next: (resp: Car) => {
        this.car = resp;
      }
    });
  }

  onSubmitForm(){
    this.car.carType = this.signupForm.value.type;
    this.car.color = this.signupForm.value.color;
    this.car.fuelType = this.signupForm.value.fuel;
    this.carsSrv.updateCar(this.car.id, this.car).subscribe({
      next: (response: Car) => {
        this.carsSrv.carChange.next(true);
        this.router.navigate(['../'], {relativeTo: this.route});
    }
    });
  }
}
