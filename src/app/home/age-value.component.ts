import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
    selector: 'age-value',
    template: `<button class="btn btn-primary text-center" (click)="abc()">Show age</button>`
})
export class AgeValue implements ICellRendererAngularComp{

    ageValue!: number;
    nameValue!: String;

    refresh(params: ICellRendererParams): boolean {
        return true;
    }
    agInit(params: ICellRendererParams): void {
        this.ageValue = params.data.age;
        this.nameValue = params.data.name;
    }

    abc(){
        alert(`${this.nameValue} is ${this.ageValue} years old.`);
    };

}