import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private userServ: UsersService,
              private router: Router) { }

  selectedUser: number;

  ngOnInit(): void {
    this.selectedUser = this.userServ.getUserId();
    if(!this.selectedUser){              // nepusti to dokud nebude vyplněn carID
        this.router.navigate(['users']);
    }
  }

}
