import { Component } from '@angular/core';
import { MattbComponent } from './mattb/mattb.component';
import { AggridComponent } from "./aggrid/aggrid.component";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [MattbComponent, AggridComponent]
})
export class AppComponent {
  title = 'matApp';
}
