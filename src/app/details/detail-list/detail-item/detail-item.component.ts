import { Component, Input, OnInit } from '@angular/core';
import { Detail } from '../../detail.module';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {

  constructor() { }

  @Input('detailInfo') detail: Detail;

  ngOnInit(): void {
  }

}
