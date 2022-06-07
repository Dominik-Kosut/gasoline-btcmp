import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarComponent } from "./cars/car/car.component";
import { CarDetailComponent } from "./cars/cars-init/car-detail/car-detail.component";
import { CarEditComponent } from "./cars/cars-init/car-edit/car-edit.component";
import { CarInitComponent } from "./cars/cars-init/car-init/car-init.component";
import { CarsInitComponent } from "./cars/cars-init/cars-init.component";
import { CarsComponent } from "./cars/cars.component";
import { DetailComponent } from "./detail/detail.component";
import { DetailEditComponent } from "./details/detail-edit/detail-edit.component";
import { DetailListComponent } from "./details/detail-list/detail-list.component";
import { DetailsComponent } from "./details/details.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { UserDetailComponent } from "./users/user-detail/user-detail.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { UserInitComponent } from "./users/user-init/user-init.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'new-user', component: UserComponent},
    {path: 'users', component: UsersComponent, children: [
        {path: '', component: UserInitComponent},
        {path: ':id', component: UserDetailComponent},
        {path: ':id/edit', component: UserEditComponent},
    ]},
    {path: 'cars', component: CarsComponent, children: [
        {path: 'new-car', component: CarComponent},
        {path: '', component: CarsInitComponent, children: [
            {path: '', component: CarInitComponent},
            {path: ':id', component: CarDetailComponent},
            {path: ':id/edit', component: CarEditComponent}
        ]},
    ]},
    {path: 'details', component: DetailsComponent, children: [
        {path: '', component: DetailListComponent},
        {path: 'new', component: DetailComponent},
        {path: ':id/edit', component: DetailEditComponent},
    ]},
    {path: '**', component: HomeComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}