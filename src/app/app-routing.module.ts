import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import{ProductComponent} from './product/product.component'
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent

  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'shop', component:ShopComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
