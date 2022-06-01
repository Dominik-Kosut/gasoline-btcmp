import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarsComponent } from "./cars/cars.component";
import { DetailsComponent } from "./details/details.component";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { UserDetailComponent } from "./users/user-detail/user-detail.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cars', component: CarsComponent},
    {path: 'details', component: DetailsComponent},
    {path: 'new-user', component: UserComponent},
    {path: 'users', component: UsersComponent, children: [
        {path: ':id', component: UserDetailComponent},
        {path: ':id/edit', component: UserEditComponent},
    ]},
    {path: '**', component: HomeComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}