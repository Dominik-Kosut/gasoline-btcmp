import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { User } from "./users.module";

@Injectable({providedIn: "root"})
export class UsersService{

    constructor(private http: HttpClient){}

    private apiServerUrl = environment.apiBaseUrl;

    getAllUsers(){
        return this.http.get<User[]>(this.apiServerUrl + '/owners');
    }

    getUserById(id: number){
        return this.http.get<User>(this.apiServerUrl + `/owners/${id}`);
    }

    deleteUserById(id: number){
        return this.http.delete<boolean>(this.apiServerUrl + `/owners/${id}`);
    }

    addNewUser(newOwner: User){
        return this.http.post<User>(this.apiServerUrl + '/owners', newOwner);
    }
}