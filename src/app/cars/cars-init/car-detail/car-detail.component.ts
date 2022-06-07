import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Car } from '../../car.module';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  
  constructor(private carsServ: CarsService,
              private route: ActivatedRoute,
              private router: Router) { }

  car: Car;

  ngOnInit(): void {
    this.garCarById(+this.route.snapshot.params['id']);
    this.route.params.subscribe({
      next: (param: Params) => {
      this.garCarById(+param['id']);
      },
      error: () => this.router.navigate['cars']
    });

  }

  onInfoCar(id: number){
    this.carsServ.setCarId(id);
    this.router.navigate(['/details']);
  }

  onEditCar(id: number){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteCar(id: number){
    this.carsServ.deleteCarById(id).subscribe({
      next: (response: boolean) =>{
        if(response){
          console.log('Auto bylo vymazano');
          this.carsServ.carChange.next(true);
          this.carsServ.setCarId(null);
          this.router.navigate(['cars']);
        }
      }
    });
  }

  private garCarById(id: number){
    this.carsServ.getCarById(id).subscribe({
      next: (repsonse: Car) => {
      this.car = repsonse
      },
      error: () => this.router.navigate['cars']
    });
  }

}
