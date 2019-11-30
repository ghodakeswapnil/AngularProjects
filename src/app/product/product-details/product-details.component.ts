import { Component, OnInit } from '@angular/core';
import { MyproductService } from 'src/app/myproduct.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  //products:any[];
  products:any;

  myProp:boolean = false;
  
  constructor(public ps:MyproductService) { }

  /*ngOnInit() {
    this.products=this.ps.getAllProducts();
  }*/
  ngOnInit() {
    this.products=this.ps.getAllProducts().subscribe(data=>this.products=data);  // YOu need to subscribe as product returning observable
  }

  handleClick(event: Event) {
    
    //this.myProp=true;
    

    if (this.myProp==false) {
      this.myProp = true;
    } else {
      this.myProp = false;
    }
    console.log(this.myProp);

  }

  

}
