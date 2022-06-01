import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../users.module';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  constructor(private usersSrv: UsersService,
              private route: ActivatedRoute,
              private router: Router) { }

  @ViewChild('f') signupForm: NgForm;

  user: User;
  name: string;
  surname: string;
  email: string;

  ngOnInit(): void {
    this.usersSrv.getUserById(+this.route.snapshot.params['id']).subscribe({
      next: (resp: User) => {
        this.user = resp;
        this.name = resp.name;
        this.surname = resp.surname;
        this.email = resp.email;
      }
    });
  }
  onSubmitForm(){
    console.log(this.name);
  }

  onEdit(){
    console.log(this.name);
  }


}
