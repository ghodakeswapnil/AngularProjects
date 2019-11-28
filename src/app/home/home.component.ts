import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myProp:string = "Hello";

  employees:any[] = [
    {
    "employeeId":1001,
    "employeeName":"Ram",
    "employeeSalary":10
    },
    {
      "employeeId":1002,
      "employeeName":"Laxman",
      "employeeSalary":100
    }
  ];         // any -  used if you don't know the type of variable


  constructor() { }

  ngOnInit() {
  }

  myFunction():void {
    console.log("Ram");
  }
}
