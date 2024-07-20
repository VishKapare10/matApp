import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'; // or any other theme
import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-aggrid',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    AgGridModule],
  templateUrl: './aggrid.component.html',
  styleUrl: './aggrid.component.css'
})
export class AggridComponent {
  title = 'ag-grid-standalone-example';


  rowData = [
    { Name: 'Abhay', Age: 25, Gender: 'Male',editable: true },
    { Name: 'John', Age: 28, Gender: 'Male',editable: true },
    { Name: 'Akash', Age: 19, Gender: 'Male',editable: true },
    { Name: 'Neha', Age: 18, Gender: 'Female',editable: true },
    { Name: 'Pratik', Age: 21, Gender: 'Male',editable: true },
    { Name: 'Sonal', Age: 20, Gender: 'Female',editable: true }

  ];

  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'Name',filter: true },
    { headerName: 'Age', field: 'Age',filter: true },
    { headerName: 'Gender', field: 'Gender',filter: true }
  ];

  onCellValueChanged(event: any) {
    // Handle cell value changed event
    console.log('Cell value changed', event);
    // You can save the updated data to your backend or perform other actions here
  }
}
