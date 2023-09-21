import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModelServer, serverResponse } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
/*Products Array to Store Product Details*/ 
products: ProductModelServer[] = [];
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
     /* TO GET ALL THE PRODUCTS */
   this.productService.getAllProducts(50).subscribe((prods: serverResponse )=>
   {
     this.products=prods.products;
     console.log(this.products);
   }
   )};
   selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }
  }


