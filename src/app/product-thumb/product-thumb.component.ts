import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../bean/product';

@Component({
  selector: 'app-product-thumb',
  templateUrl: './product-thumb.component.html',
  styleUrls: ['./product-thumb.component.css']
})
export class ProductThumbComponent implements OnInit {

  @Input()
  public data:Product;

  @Output()
  public addToCart:EventEmitter<Product>;

  @Output()
  public hide:EventEmitter<Product>;
  
  constructor() { 
    this.addToCart = new EventEmitter<Product>();
    this.hide = new EventEmitter<Product>();
  }

  public clickButton():void{
    this.addToCart.emit(this.data);
  }

  public clickHideBtn():void{
    this.hide.emit(this.data);
  }

  ngOnInit() {
  }

}
