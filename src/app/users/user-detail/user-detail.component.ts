import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../users.module';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  constructor(private usersServ: UsersService,
              private route: ActivatedRoute,
              private router: Router) { }

  user: User;

  ngOnInit(): void {
    this.getUserById(+this.route.snapshot.params['id']);
    this.route.params.subscribe({
      next: (param: Params) => {
        this.getUserById(+param['id']);
      },
      error: () => this.router.navigate['owners']
    });

  }

  onEditUser(id: number){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteUser(id: number){
    this.usersServ.deleteUserById(id).subscribe({
      next: (response: boolean) =>{
        if(response){
          console.log('Uzivatel byl vymazan');
          this.usersServ.usersChange.next(true);
          this.router.navigate(['users']);
        }
      }
    });
  }






  private getUserById(id: number){
    this.usersServ.getUserById(id).subscribe({
      next: (repsonse: User) => {
        this.user = repsonse
      },
      error: () => this.router.navigate['owners']
    });
  }

}
