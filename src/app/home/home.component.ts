import { Component, OnInit } from '@angular/core';
import { ColDef, Color, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { User } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { GridApi } from 'ag-grid-community';
import { Router } from '@angular/router';
import { AgeCellRender } from './age-cell-render.component';
import { AgeValue } from './age-value.component';
import { MyCustomCellEditor } from './my-custom-cell-editor.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private gridApi!: GridApi;
  private selectedRows = [];
  mojeData = '';
  testNames = ['Aneta', 'Antonín', 'Adam', 'Dagmar', 'Dominik', 'Dominika', 'Anežka', 'Dalibor']

  constructor(private userServ: UsersService,
              private router: Router){}

  colDefs: ColDef[] = [
    {field: 'id', headerName: 'Ref. number'},
    {field: 'name',
     editable: true,
     cellEditor: MyCustomCellEditor,
     cellEditorPopup: true,
     cellEditorParams: {
      options: this.testNames
     }},
    {field: 'surname', sortable: true},
    {field: 'email'},
    {field: 'emailShow',
      width: 150,
      cellRenderer: AgeCellRender},
    {field: 'age',
     filter: 'agNumberColumnFilter',
     filterParams: {
        buttons: ['reset', 'apply'],
        debounceMs: 200,
        closeOnApply: true
      },
      cellRenderer: AgeValue,
      editable: true
    }
  ];

  rowData: User[];

  ngOnInit(): void {
    this.userServ.usersChange.subscribe({
      next: () => {
        this.getAllUsers();
      }
    });
  };

  deleteAllSelectedUsers(){
    if(this.selectedRows.length != 0){
      this.selectedRows.forEach(row => {
        console.log(row.id);
        this.deleteUsersById(row.id);
      });
    }
  };

  showAllSelectedUsers(){
    this.userServ.setUserId(this.selectedRows[0].id);
    this.router.navigate(['/users']);
  };

  refreshCellsBtn(){
    this.gridApi.refreshCells();
    console.log("Refresh");
  };

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.getAllUsers();
    this.gridApi.sizeColumnsToFit();
  };

  onSelectionChanged(){
    this.selectedRows = this.gridApi.getSelectedRows();
  };

  private getAllUsers(){
    this.userServ.getAllUsers().subscribe({
      next: (response: User[])=> {
        this.rowData = response;
        this.gridApi.refreshCells();
      }
    });
  };

  private deleteUsersById(id: number){
    this.userServ.deleteUserById(id).subscribe({
      next: response => {
        this.userServ.usersChange.next(true);
      }
    });
  };
}
