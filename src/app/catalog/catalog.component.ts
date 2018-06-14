import { Component, OnInit } from '@angular/core';
import {Product} from '../bean/product';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public catalog: Array<Product>;
  public nom:string;
  public prix:number;
  private service:ProductService;
  private myCartService:CartService;

  constructor(
    p_service:ProductService,
    p_service2:CartService
  ) {

    this.nom            = "";
    this.prix           = 10000;
    this.service        = p_service;
    this.myCartService  = p_service2;
    this.catalog        = new Array<Product>();
  }

  public addToCart(p_product:Product):void{
    //alert(p_product.title+" a été ajouté au panier !");

    this.myCartService.addToCart(p_product);
  }

  public ngOnInit():void {
    this.service.getProducts().then(

      (products:Array<Product>) => {
        this.catalog = products;
      }

    ).catch(
      (error:any) => {
        console.log(error);
      }
    );
  }

}
