import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from 'src/test/test.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { MyPipe } from './my.pipe'; // Used for Two way data binding 
import { HrModule } from './hr/hr.module';
import { ProductModule } from './product/product.module';
import { MyproductService } from './myproduct.service';
import { HttpClientModule } from '@angular/common/http';  // Used for RestService consumption. You can call endpoints


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
    FormsModule,
    HrModule,
    ProductModule,
    HttpClientModule
  ],
  providers: [MyproductService],
  bootstrap: [AppComponent]
})

//imported HrModule its feature module
export class AppModule { }
