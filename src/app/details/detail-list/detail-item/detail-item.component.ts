import { Component, Input, OnInit } from '@angular/core';
import { Detail } from '../../detail.module';
import { DetailsService } from '../../details.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {

  constructor(private detailServ: DetailsService,
              ) { }

  @Input('detailInfo') detail: Detail;

  ngOnInit(): void {
  }

  onEditDetail(id: number){
    
  }

  onDeleteDetail(id: number){
    this.detailServ.deleteDetail(id).subscribe({
      next: (response: boolean) => {
        if(response){
          this.detailServ.detailChange.next(true);
        }
      }
    });

  }

}
