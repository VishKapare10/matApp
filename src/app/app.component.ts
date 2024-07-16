import { Component } from '@angular/core';
import { MattbComponent } from './mattb/mattb.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [MattbComponent]
})
export class AppComponent {
  title = 'matApp';
}
