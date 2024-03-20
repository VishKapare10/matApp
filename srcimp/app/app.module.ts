import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MattbComponent } from './mattb/mattb.component';

@NgModule({
  declarations: [
    AppComponent,
    MattbComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatFormFieldModule,MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
