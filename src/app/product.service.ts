import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModelServer } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /* BackEnd URL */
  SERVER_URL="http://localhost:8081/the-bakershub";

  constructor(private http: HttpClient) { }

  /* To Display ALl the Products*/
  getAllProducts(numberofResults=10)
  {
    return this.http.get(this.SERVER_URL +'/product',
    {
      params:{
        limit:numberofResults.toString()
      }
    });
    
  }
  getSingleProduct(id: Number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.SERVER_URL + '/product/' + id);
  }
  
}
