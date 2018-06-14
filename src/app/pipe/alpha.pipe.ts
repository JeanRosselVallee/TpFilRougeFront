import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../bean/product';

@Pipe({
  name: 'alpha'
})
export class AlphaPipe implements PipeTransform {

  transform(value: Array<Product>, p_name:string): Array<Product> {

    let i:number = 0;
    let max:number = value.length;
    let results:Array<Product> = new Array<Product>();

    for( i = 0; i < max; i++ ){
      if( value[i].title.toLowerCase().indexOf(p_name.toLowerCase()) > -1 ){
        results.push(value[i]);
      }
    }

    return results;
  }

}
