import { Injectable } from '@angular/core';
import { Product, PRODUCT_MOCK } from '../bean/product';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import {environment}  from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private service: Http;

  constructor(p_service: Http) {
    this.service = p_service;
  }

  public getProductByTitle(p_title: String): Promise<Product> {

    return this.getProducts().then(
      (products: Product[]): Product => {
        const max: number = products.length;
        let i: number = 0;

        for (i = 0; i < max; i++) {
          if (products[i].title == p_title)
            return products[i];
        }

        return null;
      }
    ).catch(
      (error) => {
        console.log(error);
        return null;
      }
    );
  }

  public getProducts(): Promise<Array<Product>> {

    const promise: Promise<Array<Product>> = this.service.get(
      environment.getCatalogURL
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

  public postProduct( p_product:Product ):Promise<Object>{

    let promise:Promise<Object> = null;
    let body:URLSearchParams = new URLSearchParams();
    let headers:Headers = new Headers(
      {"Content-Type":"application/x-www-form-urlencoded"}
    );
    let options:RequestOptions = new RequestOptions();

    body.set("title", p_product.title);
    body.set("tva", p_product.tva.toString());
    body.set("price", p_product.price.toString());
    body.set("url", p_product.url);

    options.headers = headers;

    promise = this.service.post(
                              environment.postCatalogURL, 
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

  public removeProduct( p_product:Product ):Promise<Object>{

    
    let promise:Promise<Object> = null;
    let options:RequestOptions  = new RequestOptions();
    options.params              = new URLSearchParams();
    
    options.params.set("id", p_product.id.toString());
    options.params.set("api", "azerty123");

    promise = this.service.delete(
                              environment.delCatalogURL,
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
