import { Injectable } from '@angular/core';
import { Product } from '../bean/product';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import {environment}  from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Array<Product>;
  private service :Http;

  constructor(p_service:Http) {

    this.cart = new Array<Product>();
    this.service=p_service;

  }

  public getFullCart(): Promise<Array<Product>> {

    const promise: Promise<Array<Product>> = this.service.get(
      environment.getCartURL
    ).toPromise()
      .then(
        (rep: Response): Array<Product> => {
          return rep.json() as Array<Product>;
        }
      ).catch(
        (error: any): Promise<any> => {
          return Promise.reject(error);
        }
      );

    return promise;

  }
  //public addToCart(p_product:Product):void{
    //this.cart.push(p_product);
  public addToCart( p_product:Product )  :Promise<Object>{

      let promise:Promise<Object> = null;
      let body:URLSearchParams = new URLSearchParams();
      let headers:Headers = new Headers(
        {"Content-Type":"application/x-www-form-urlencoded"}
      );
      let options:RequestOptions = new RequestOptions();


      body.set("Product_id", p_product.id.toString());

      options.headers = headers ;

      promise = this.service.post(
                                environment.postCartURL,
                                body,
                                options
                              )
                              .toPromise()
                              .then(
                                ( rep:Response ):Object => {
                                  return rep.json();
                                }
                              )
                              .catch(
                                (error:any): Promise<any> => {
                                  return Promise.reject(error);
                                }
                              );
      return promise;
  }
/*
  public removeFromCart(p_product:Product):void{

    const index:number = this.cart.indexOf(p_product );
    if( index > -1 ){
      this.cart.splice(index, 1);
    }
  }
*/
  public removeFromCart( p_product:Product )  :Promise<Object>{


    let promise:Promise<Object> = null;
    let options:RequestOptions  = new RequestOptions();
    options.params              = new URLSearchParams();

    options.params.set("id", p_product.id.toString());
    options.params.set("api", "azerty123");

    promise = this.service.delete(
      environment.delCartURL,
      options
    )
      .toPromise()
      .then(
        ( rep:Response ):Object => {
          return rep.json();
        }
      )
      .catch(
        (error:any): Promise<any> => {
          return Promise.reject(error);
        }
      );

    return promise;
  }

}
