import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../users/users.module';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private router: Router,
              private userSrv: UsersService) { }
  @ViewChild('f') form: NgForm;

  ngOnInit(): void {

  }

  onSubmit(){
    console.log(this.form);

    this.userSrv.addNewUser(
      new User(0, this.form.value.name, this.form.value.surname, this.form.value.email, this.form.value.age)
    ).subscribe({
      next: () => {
        this.form.reset();
        this.router.navigate(['/users']);
        this.userSrv.usersChange.next(true);
      }
    });
  }

}
