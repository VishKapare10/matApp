import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';  // Import Angular's CommonModule

export interface PeriodicElement {
  name: string;
  age: number;
  editing?: boolean;  // Flag to determine if the row is in edit mode
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen', age: 1 },
  { name: 'Helium', age: 2 },
  { name: 'Oxygen', age: 3 },
  { name: 'Neon', age: 4 },
  { name: 'Nitrogen', age: 5 },
  // Add more data here
];

@Component({
  selector: 'app-inline-edit-table',
  templateUrl: './inline-edit-table.component.html',
  styleUrls: ['./inline-edit-table.component.css'],
  standalone:true,
  imports: [MatTableModule, MatSortModule,MatCardModule,MatIconModule,FormsModule,CommonModule]
})
export class InlineEditTableComponent {
  displayedColumns: string[] = ['name', 'age', 'actions'];
  dataSource = ELEMENT_DATA;

  editRow(element: PeriodicElement) {
    // Set the row to editing mode
    element.editing = true;
  }

  saveRow(element: PeriodicElement) {
    // Save the edited row
    element.editing = false;
    // Optionally, add logic to save the data to a backend or service here
  }

  cancelEdit(element: PeriodicElement) {
    // Cancel the editing and revert to original data if necessary
    element.editing = false;
    // Optionally, restore the original data if needed
  }

  deleteElement(element: PeriodicElement) {
    const index = this.dataSource.indexOf(element);
    if (index >= 0) {
      this.dataSource.splice(index, 1);
      // Notify Angular that dataSource has changed
      this.dataSource = [...this.dataSource];
    }
  }
}
