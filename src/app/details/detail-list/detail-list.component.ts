import { Component, OnInit } from '@angular/core';
import { Detail } from '../detail.module';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit {

  constructor(private detailServ: DetailsService) { }

  details: Detail[];

  ngOnInit(): void {
    this.getAllCarDetails();
    this.detailServ.detailChange.subscribe({
      next: (status: boolean) => {
        this.getAllCarDetails();
      }
    });
  }


  private getAllCarDetails(){
    this.detailServ.getCarDetails(1).subscribe({
      next: (response: Detail[]) => {
        this.details = response;
      }
    });
  }

}
