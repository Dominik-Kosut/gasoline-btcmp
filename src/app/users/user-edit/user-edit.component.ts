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

  ngOnInit(): void {
    this.usersSrv.getUserById(+this.route.snapshot.params['id']).subscribe({
      next: (resp: User) => {
        this.user = resp;
      }
    });
  }
  
  onSubmitForm(){
    this.user.name = this.signupForm.value.name;
    this.user.surname = this.signupForm.value.surname;
    this.user.email = this.signupForm.value.email;
    this.usersSrv.updateUser(this.user.id, this.user).subscribe({
      next: (response: User) => {
        this.usersSrv.usersChange.next(true);
        this.router.navigate(['../'], {relativeTo: this.route});
      }
    });
  }



}
