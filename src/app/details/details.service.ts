import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Detail } from "./detail.module";

@Injectable({providedIn: "root"})
export class DetailsService{
    constructor(private http: HttpClient){}

    private apiServerUrl = environment.apiBaseUrl;
    detailChange = new Subject<boolean>();

    getCarDetails(carId: number){
        return this.http.get<Detail[]>(this.apiServerUrl + `/cars/${carId}/details`);
    }

    getDetail(id: number){
        return this.http.get<Detail>(this.apiServerUrl + `/details/${id}`);
    }

    updateDetail(id: number, detail: Detail){
        return this.http.put<Detail>(this.apiServerUrl + `/details/${id}`, detail);
    }

    addNewDetail(carId: number, newDetail: Detail){
        return this.http.post<Detail>(this.apiServerUrl + `/cars/${carId}/details`, newDetail);
    }

    deleteDetail(detailId: number){
        return this.http.delete<boolean>(this.apiServerUrl + `/details/${detailId}`);
    }
}