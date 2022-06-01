import { Component, OnInit } from '@angular/core';
import { User } from '../users.module';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private usersServ: UsersService) { }

  items: number[] = [1,2,3,4,5,6,7];
  users: User[];

  

  ngOnInit(): void {
    this.usersServ.getAllUsers().subscribe({
      next: (response: User[]) => {
        this.users = response;
      }
    })
  }

}
