import { Component, OnInit } from '@angular/core';
import { MyproductService } from 'src/app/myproduct.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products:any[];

  myProp:boolean = false;
  
  constructor(public ps:MyproductService) { }

  ngOnInit() {
    this.products=this.ps.getAllProducts();
  }

  handleClick(event: Event) {
    
    //this.myProp=true;
    console.log('Click!', event)

    if (this.myProp==false) {
      this.myProp = true;
    } else {
      this.myProp = false;
    }
    console.log(this.myProp);

  }

  

}
