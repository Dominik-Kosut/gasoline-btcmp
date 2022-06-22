import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserItemComponent } from './users/user-list/user-item/user-item.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { DetailListComponent } from './details/detail-list/detail-list.component';
import { DetailItemComponent } from './details/detail-list/detail-item/detail-item.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule } from '@angular/forms';
import { DetailEditComponent } from './details/detail-edit/detail-edit.component';

import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { CarsInitComponent } from './cars/cars-init/cars-init.component';
import { CarDetailComponent } from './cars/cars-init/car-detail/car-detail.component';
import { CarEditComponent } from './cars/cars-init/car-edit/car-edit.component';
import { CarInitComponent } from './cars/cars-init/car-init/car-init.component';
import { CarListComponent } from './cars/cars-init/car-list/car-list.component';
import { CarItemComponent } from './cars/cars-init/car-list/car-item/car-item.component';
import { AgeCellRender } from './home/age-cell-render.component';
import { AgeValue } from './home/age-value.component';
import { MyCustomCellEditor } from './home/my-custom-cell-editor.component';

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
    CarComponent,
    CarsInitComponent,
    CarDetailComponent,
    CarEditComponent,
    CarInitComponent,
    CarListComponent,
    CarItemComponent,
    DetailsComponent,
    NavigationComponent,
    DetailListComponent,
    DetailItemComponent,
    DetailEditComponent,
    DetailComponent,
    AgeCellRender,
    AgeValue,
    MyCustomCellEditor
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
