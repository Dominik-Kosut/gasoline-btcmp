import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserItemComponent } from './users/user-list/user-item/user-item.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { CarsComponent } from './cars/cars.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UsersComponent,
    UserListComponent,
    UserItemComponent,
    UserDetailComponent,
    UserEditComponent,
    CarsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
