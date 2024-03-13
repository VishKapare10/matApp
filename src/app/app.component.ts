import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table'
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';


export interface UserData {
  name: string;
  age: number;
  isEditing?: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, MatIconModule,FormsModule,MatTableModule,MatFormFieldModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'age', 'edit'];
  dataSource = new MatTableDataSource<UserData>([
    { name: 'John', age: 30, isEditing: false },
    { name: 'Jane', age: 25, isEditing: false },
    { name: 'Doe', age: 40, isEditing: false }
  ]);

  toggleEdit(item: UserData): void {
    item.isEditing = !item.isEditing;
    if (!item.isEditing) {
      // If editing mode is turned off, save changes
      this.saveItem(item);
    }
  }

  saveItem(item: UserData): void {
    // Perform save logic here, e.g., update data in the database
    console.log('Saving item:', item);
    item.isEditing = false; // Disable editing mode after saving
  }

  cancelEdit(item: UserData): void {
    // Perform cancel edit logic here, e.g., revert changes
    console.log('Editing canceled for item:', item);
    item.isEditing = false; // Disable editing mode
  }
}
  