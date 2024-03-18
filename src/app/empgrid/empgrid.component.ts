import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table'
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatDateFormats, NativeDateAdapter } from '@angular/material/core';
import {MatDialog, MatDialogConfig,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export interface UserData {
  name: string;
  date:Date;
  age: number;
  isEditing?: boolean;
}

@Component({
    selector: 'app-empgrid',
    standalone: true,
    templateUrl: './empgrid.component.html',
    styleUrl: './empgrid.component.css',
    imports: [
        CommonModule, MatIconModule, FormsModule, MatTableModule, MatFormFieldModule, MatDatepickerModule,
        MatInputModule, MatNativeDateModule,MatExpansionModule //,BrowserAnimationsModule
        ,
    ]
})
export class EmpgridComponent {
  selectrowcount: boolean=false;
  displayedColumns: string[] = ['name', 'date','age', 'edit'];
  displayedColumns2: string[] = ['Age', 'Gift_card_code'];
  dataSource = [
    { name: 'John', date:new Date('1/1/24'),age: 30, isEditing: false },
    { name: 'Jane', date:new Date('1/1/24'),age: 25, isEditing: false },
    { name: 'Doe', date:new Date('1/1/24'),age: 40, isEditing: false }
  ];

  dataSource2 = [
    { Age:25,Gift_card_code: 'ANJdjfh24'}
  ];
  isEditDisabled: boolean=false;
  selectAllChecked: boolean=false;

  toggleEdit(item: UserData): void {
    item.isEditing = !item.isEditing;
    if (!item.isEditing) {
      // If editing mode is turned off, save changes
      this.saveItem(item);
    }
  }

  Editrows(){

  }

  selectRow(row:any){

    row.selected ? this.checkBoxChecked(): this.checkBoxunchecked();
    if(row.selected){
      this.selectrowcount=true;
    }
    if(!row.selected){
      this.selectrowcount=true;

    }
  }

  passwordVisible: boolean = false;

  // Method to toggle password visibility
  togglePasswordVisibility(row: any) {
    this.passwordVisible = !this.passwordVisible;
    // If password is visible, change input type to "text", otherwise to "password"
    const inputType = this.passwordVisible ? 'text' : 'password';
    row.Gift_Card_Code = inputType === 'password' ? row.Gift_Card_Code : ''; // Clear input if switching to password type
    // Update input type dynamically
    const inputElement = document.querySelector(`input[Gift_Card_Code="Gift_Card_Code"]`) as HTMLInputElement;
    if (inputElement) {
      inputElement.type = inputType;
    }
  }

  // Additional method if needed
  onkeyPress(event: any) {
    // Your logic for key press event
  }


  checkBoxChecked(){
    this.isEditDisabled = false;
    //const allRowSelected = this.dataSource.every(
    //  (row) => row.selected
    //)
    //if(allRowSelected){
     // this.selectAllChecked =  true;
    //}
  }

  checkBoxunchecked(){

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
  