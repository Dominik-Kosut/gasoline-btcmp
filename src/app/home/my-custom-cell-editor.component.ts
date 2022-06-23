import { Component } from "@angular/core";
import { ICellEditorAngularComp } from "ag-grid-angular";
import { ICellEditorParams, ICellRendererParams } from "ag-grid-community";

@Component({
    selector: 'my-custom-cell-editor',
    templateUrl: './search-drop.component.html',
    styleUrls: ['./search-drop.component.css']
})
export class MyCustomCellEditor implements ICellEditorAngularComp {
    params!: any;
    inputData: string = "";
    data: string;

    vysledekHledani = [];

    agInit(params: ICellEditorParams): void {
        this.params = params;
        this.onInputChanges(this.inputData);
    }

    getValue() {
        return this.data;
    }

    isCancelAfterEnd() {
        if(!this.data){
            return true;
        }
    }

    onInputChanges(inputData: string){
        this.inputData = inputData;
        this.vysledekHledani = [];
        
        this.params.options.forEach((element: string) => {
            if(element.toLowerCase().includes(this.inputData.toLowerCase())){
                this.vysledekHledani.push(element);
            }
        });
        // console.log(this.vysledekHledani);
    }

    onClickOption(data: string){
        this.data = data;
        this.params.api.stopEditing();
    }

}