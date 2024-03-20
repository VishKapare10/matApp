import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
//import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

// app.component.ts

export interface UserData {
  id: string;
  name: string;
  age: number;
  gender: string;
}

@Component({
  selector: 'app-mattb',
  templateUrl: './mattb.component.html',
  styleUrl: './mattb.component.css'
})
export class MattbComponent {


  Editrows() {
    throw new Error('Method not implemented.');
    }
    displayedColumns2: string[] = ['name', 'age', 'gender'];
    dataSource2: UserData[] = [
      { id: '1', name: 'John', age: 30, gender: 'Male' },
      { id: '2', name: 'Alice', age: 25, gender: 'Female' },
      { id: '3', name: 'Bob', age: 35, gender: 'Male' }
    ];
    filteredDataSource: UserData[] = this.dataSource2;
  
    applyFilter(event: Event, column: string) {
      console.log('apply filter',column);

      const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
      if (!filterValue) {
        this.filteredDataSource = this.dataSource2;
        return;
      }
    
      this.filteredDataSource = this.dataSource2.filter(data => {
    if (column === 'name') {
      return data[column].toLowerCase().includes(filterValue);
    } else if (column === 'age') {
      return data[column].toString().toLowerCase().includes(filterValue);
    } else if (column === 'gender') {
      return data[column].toLowerCase() === filterValue;
    }
        // Add a default return statement
        return false; // or any other default value
      });
    }
    
    
}
