import { cart } from './mock-cart-delete';
// import the cart interface
import { Cart } from './cartInterface';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  // get cart details should return an observable of cart details from
  // the server
  getCartDetails(): Observable<Cart[]>{
    return of (cart);
  }
}
