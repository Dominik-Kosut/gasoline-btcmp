import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  items: number[] = [1,2,3,4,5,6,7]

  constructor() { }

  ngOnInit(): void {
  }

}
