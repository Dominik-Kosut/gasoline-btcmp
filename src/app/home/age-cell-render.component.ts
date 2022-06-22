import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
    selector: 'age-cell-render',
    template: `<span>{{age}}</span>`,
})
export class AgeCellRender implements ICellRendererAngularComp {

    age: string

    agInit(params: ICellRendererParams): void {
        this.age = "******"
    };

    refresh(params: ICellRendererParams): boolean {
        return true;
    };
    
}