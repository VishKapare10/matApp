import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';


// app.component.ts

export interface UserData {
  name: string;
  age: number;
  gender: string;
}

const ELEMENT_DATA: UserData[] = [
  { name: 'Abhay', age: 25, gender: 'Male' },
  { name: 'John', age: 28, gender: 'Male' },
  { name: 'Akash', age: 19, gender: 'Male' },
  { name: 'Neha', age: 18, gender: 'Female' },
  { name: 'Pratik', age: 21, gender: 'Male' },
  { name: 'Sonal', age: 20, gender: 'Female' }
];

let originalData: UserData[];

@Component({
  selector: 'app-mattb',
  templateUrl: './mattb.component.html',
  styleUrl: './mattb.component.css',
  standalone: true,
  imports: [MatTableModule, MatSortModule,MatCardModule],
})
export class MattbComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  displayedColumns: string[] = ['name', 'age', 'gender'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  filteredDataSource: UserData[] | undefined;

  ngOnInit() {
    originalData = this.dataSource.data;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  Editrows() {
    throw new Error('Method not implemented.');
  }

  applyFilter(event: Event, column: string) {

    const filterValue = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    if (!filterValue) {
      this.filteredDataSource = originalData;
      this.dataSource.data = originalData;
      return;
    }

    this.dataSource.data = this.dataSource.data.filter((data) => {
      if (column === 'name') {
        return data[column].toLowerCase().includes(filterValue);
      } else if (column === 'age') {
        return data[column].toString().toLowerCase().includes(filterValue);
      } else if (column === 'gender') {
        return data[column].toLowerCase().includes(filterValue);
      }
      // Add a default return statement
      return false; // or any other default value
    });
  }
}
