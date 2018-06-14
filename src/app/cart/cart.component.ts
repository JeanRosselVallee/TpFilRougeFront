import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Product } from '../bean/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private service:CartService;
  public data:Product;
  public cart:Array<Product>;

  constructor( p_service:CartService ) {
    this.data = new Product();
    this.service = p_service;
    this.cart = new Array<Product>();
  }

  public delCartHandler(p_product:Product):void{
    this.service.removeFromCart(p_product).then(
      () => {
        this.ngOnInit();
        //window.location.reload();
      }
    );
  }

  ngOnInit() {
    this.service.getFullCart().then(
      ( p_products:Product[]) => {
        this.cart = p_products;
      }
    );


  }

}
