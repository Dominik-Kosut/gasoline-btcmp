import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detail } from '../../detail.module';
import { DetailsService } from '../../details.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {

  constructor(private detailServ: DetailsService,
              private router: Router,
              private route: ActivatedRoute) { }

  @Input('detailInfo') detail: Detail;

  ngOnInit(): void {
  }

  onEditDetail(id: number){
    this.router.navigate([id, 'edit'], {relativeTo: this.route});
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
