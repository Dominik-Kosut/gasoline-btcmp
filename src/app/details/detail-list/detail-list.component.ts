import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CarsService } from 'src/app/cars/cars.service';
import { Detail } from '../detail.module';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit, OnDestroy{

  constructor(private detailServ: DetailsService,
              private carService: CarsService,
              private router: Router,
              private route: ActivatedRoute){}

  details: Detail[];
  detailObs: Subscription;
  carId: number;
  
  ngOnInit(): void {
    this.carId = this.carService.getCarId();
    this.getCarDetails(this.carId);
    this.detailObs = this.detailServ.detailChange.subscribe({
      next: (response: boolean) => {
        this.getCarDetails(this.carId);
      }
    });
  }

  ngOnDestroy(): void {
    this.detailObs.unsubscribe();
  }

  onAddNewDetail(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  private getCarDetails(id: number){
    this.detailServ.getCarDetails(id).subscribe({
      next: (response: Detail[]) => {
        this.details = response;
      }
    });
  }


}
