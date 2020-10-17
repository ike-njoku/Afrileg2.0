import { PRODUCTS } from './mockProductsDelete';
import { HttpClient} from '@angular/common/http';
import { Products } from './productInterface';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // url to fetch products from
  private readonly  url: string = 'src/app/mockProductsDelete.ts';

  // inject http module as a dependen
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Products[]>{
    // fetch array of porducts
    // what this method does is to return the list of all the
    // products in the database model
    return of (PRODUCTS);
  }

  // get porduct (id)
  // get a single porduct by id
  getProduct(id: number){
    // return the product who's property (id) is exactly the same as the parameter (id)
    return of (PRODUCTS.find(product =>  product.id === id));
  }

}
