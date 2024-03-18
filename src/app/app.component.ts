import { Component } from "@angular/core";
import { EmpgridComponent } from "./empgrid/empgrid.component";
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export interface UserData {
  name: string;
  date:Date;
  age: number;
  isEditing?: boolean;
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [EmpgridComponent]
})
export class AppComponent {
  
}
  