import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {ProductModelServer, serverResponse} from '../product.model';
import {Router} from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /*Products Array to Store Product Details*/ 
  products:any;
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    /* TO GET ALL THE PRODUCTS */
   this.productService.getAllProducts().subscribe((prods: serverResponse )=>
    {
      this.products=prods;
      console.log(prods);
    }
    )};
    /*  GET PRODUCT BY ID */ 
    selectProduct(id: Number) {
      this.router.navigate(['/product', id]).then();
    }
    
}
