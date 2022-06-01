import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../users.module';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  constructor() { }

  @Input('userInfo') user: User;

  ngOnInit(): void {
  }

}
