import { Component } from '@angular/core';



@Component({
    selector:'app-test',
    template:`<h1> Welcome </h1>
    <h1> Hi </h1>
    {{title}}
    {{title | uppercase}}
    {{title | lowercase}}
    
    {{title | slice:2:4}}
    {{myNumber | number:'2.2-3'}}
    {{myNumber | percent}}

    {{myNumber | currency:'INR'}}

    {{employee | json}}

    {{date}}
    {{date | date:'medium'}}

    <table>
        <thead>        
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Salary</td>
                <td>Gender</td>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let emp of employees">
                <td>{{emp.id}}</td>
                <td>{{emp.name | my:emp.gender}}</td>
                <td>{{emp.salary}}</td>
                <td>{{emp.gender}}</td>
            </tr>
        </tbody>
    </table>
    
    
    `,
    styleUrls:['./test.component.css']
})                                          
// "|" pipe sign is used to convert string to upper case etc. 
// Also you can use number pipe. 
// Also you can use JSON pipe
// curreny:'GBP'
//LowerCasePipe, UpperCasePipe, number, percent, currency, date short, medium, long, 
// You can create "custom pipe" if needed by using pipe transform
export class TestComponent {

    title:string="zensar welcome";
    myNumber:number=3.456;
    date:Date = new Date();
    employee:any={
        id:1001,
        name:'RAM',
        salary:1000
    };

    employees:any[]=[
        {   "id":1001,
            "name":"laxman",
            "salary":10,
            "gender":"male"
        },
        {   "id":1002,
            "name":"Ram",
            "salary":100,
            "gender":"male"
        },
        {   "id":1003,
            "name":"Sita",
            "salary":1000,
            "gender":"female"
        }
    ];
}