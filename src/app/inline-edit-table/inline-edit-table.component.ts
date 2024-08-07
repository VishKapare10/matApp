import {Component, ViewChild} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';  
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'; 
import { CommonModule } from '@angular/common';  // Import Angular's CommonModule
import { FormsModule } from '@angular/forms'

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'inline-edit-table',
  styleUrls: ['./inline-edit-table.component.css'],
  templateUrl: './inline-edit-table.component.html',
  standalone:true,
  imports:[MatSortModule,MatTableModule,MatPaginatorModule,MatIconModule,CommonModule,FormsModule]
})
export class InlineEditTableComponent {
  displayedColumns = ['SerialNo', 'Location', 'Facility', 'UniqueID','Actions'];
  dataSource: MatTableDataSource<UserData>;

 @ViewChild(MatSort) sort!: MatSort; // Definite assignment assertion
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Definite assignment assertion

  

  constructor() {
    // Create 100 users
    let users: UserData[] = [];
    users=[{SerialNo:'1',Location:'Vish',Facility:'50',UniqueID:'Blue'},
      {SerialNo:'2',Location:'Abhay',Facility:'50',UniqueID:'Blue'},
      {SerialNo:'3',Location:'Pratik',Facility:'50',UniqueID:'Blue'},
      {SerialNo:'4',Location:'Shubham',Facility:'50',UniqueID:'Blue'},
      {SerialNo:'5',Location:'Sneha',Facility:'50',UniqueID:'Blue'},
      {SerialNo:'6',Location:'Snehal',Facility:'50',UniqueID:'Blue'},
      {SerialNo:'7',Location:'Priya',Facility:'50',UniqueID:'Blue'},
     
    ];
    //for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editRow(element: UserData) {
    // Set the row to editing mode
    element.editing = true;
  }

  saveRow(element: UserData) {
    // Save the edited row
    element.editing = false;
    // Optionally, add logic to save the data to a backend or service here
  }

  cancelEdit(element: UserData) {
    // Cancel the editing and revert to original data if necessary
    element.editing = false;
    // Optionally, restore the original data if needed
  }

  deleteElement(element: UserData) {
    const index = this.dataSource.data.indexOf(element);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      // Notify Angular that dataSource has changed
      this.dataSource.data = [...this.dataSource.data];
    }
  }

 
}

export interface UserData {
  SerialNo: string;
  Location: string;
  Facility: string;
  UniqueID: string;
  editing?: boolean;
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */