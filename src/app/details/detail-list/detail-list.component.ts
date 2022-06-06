import { Component, OnDestroy, OnInit } from '@angular/core';
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
              private carService: CarsService){}

  details: Detail[];
  detailObs: Subscription;
  
  ngOnInit(): void {
    this.getCarDetails();
    this.detailObs = this.detailServ.detailChange.subscribe({
      next: (response: boolean) => {
        this.getCarDetails();
      }
    });
  }

  ngOnDestroy(): void {
    this.detailObs.unsubscribe();
  }

  private getCarDetails(){
    this.detailServ.getCarDetails(this.carService.getCarId()).subscribe({
      next: (response: Detail[]) => {
        this.details = response;
      }
    });
  }


}
