import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../users.module';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private usersServ: UsersService,
              private router: Router) { }

  users: User[] = [];

  

  ngOnInit(): void {
    this.getAllOwners();
    this.usersServ.usersChange.subscribe({
      next: (status: boolean) => {
        this.getAllOwners();
      }
    });
    // console.log(this.usersServ.getUserId());
  }

  onAddNewUser(){
    this.router.navigate(['new-user'])
  }










  private getAllOwners(){
    this.usersServ.getUserById(this.usersServ.getUserId()).subscribe({
      next: (response: User) => {
        this.users.push(response);
      }
    });
  }

}
