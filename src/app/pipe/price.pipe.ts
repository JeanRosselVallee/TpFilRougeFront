import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../bean/product';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: Array<Product>, p_price:number): Array<Product> {

    let i:number = 0;
    let i_price:number = p_price;
    let s_price:string = p_price.toString();
    let max:number = value.length;
    let results:Array<Product> = new Array<Product>();

    if (   typeof(p_price).toString().localeCompare("String")  ) {
      i_price=parseInt( s_price);
    }
    for( i = 0; i < max; i++ ){
      if( value[i].price <= i_price ){
        results.push(value[i]);
      }
    }

    return results;
  }

}
