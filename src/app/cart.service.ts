// import the cart interface
import { Cart } from './cartInterface';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// catching errors
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  // url to get cart details from
  private cartDetailsUrl: string = 'api/cartDetails';

  constructor(private http: HttpClient) { }

  // get cart details should return an observable of cart details from
  // the server
  getCartDetails(): Observable<Cart[]>{
    // return as an observable of type cart interface, the information located in the url in the bracket (http.get())
    return this.http.get<Cart[]>(this.cartDetailsUrl);
  }

  // remove product from cart
  removeProduct(){
    console.log('removed');
  }
}
