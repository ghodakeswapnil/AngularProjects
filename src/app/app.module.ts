import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from 'src/test/test.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { MyPipe } from './my.pipe'; // Used for Two way data binding 

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    MyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
