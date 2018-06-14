import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import {FormsModule}      from '@angular/forms';
import {RouterModule}     from '@angular/router';
import {HttpModule}       from '@angular/http';

import { AppComponent }           from './app.component';
import { HeaderComponent }        from './header/header.component';
import { MenuComponent }          from './menu/menu.component';
import { CatalogComponent }       from './catalog/catalog.component';
import { FooterComponent }        from './footer/footer.component';
import { ProductThumbComponent }  from './product-thumb/product-thumb.component';

import { AlphaPipe }      from './pipe/alpha.pipe';
import { PricePipe }      from './pipe/price.pipe';
import { HomeComponent }  from './home/home.component';
import { ProductService } from './service/product.service';
import { CartService }    from './service/cart.service';
import { CartComponent }  from './cart/cart.component';
import { AdminProductComponent } from './admin-product/admin-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CatalogComponent,
    FooterComponent,
    ProductThumbComponent,
    AlphaPipe,
    PricePipe,
    HomeComponent,
    CartComponent,
    AdminProductComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule,
    RouterModule.forRoot(
      [
        {
          path: "home", 
          component: HomeComponent, 
          pathMatch: 'full'
        }, 
        {
          path: "catalog", 
          component: CatalogComponent, 
          pathMatch: 'full'
        }, 
        {
          path: "cart", 
          component: CartComponent, 
          pathMatch: 'full'
        }, 
        {
          path: "admin/catalog", 
          component: AdminProductComponent, 
          pathMatch: 'full'
        }
      ], 
      {
        useHash: true
      }
    )
  ],
  providers: [ProductService, CartService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
