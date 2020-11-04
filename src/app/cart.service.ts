// import the cart interface
import { Cart } from './cartInterface';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  // url to get cart details from
  private cartDetailsUrl: string = 'api/cartDetails';
  // number of items in cart
  public numberOfCarItems;

  constructor(private http: HttpClient) { }

  // get cart details should return an observable of cart details from

  // the server
  getCartDetails(): Observable<Cart[]>{
    // return as an observable of type cart interface, the information located in the url in the bracket (http.get())
    return this.http.get<Cart[]>(this.cartDetailsUrl);
  }

  // removeItem
  removeItem(item: Cart): Observable<Cart> {
    const id = item.id;
    const urlToDelete = `${this.cartDetailsUrl}/${id}`;

    return this.http.delete<Cart>(urlToDelete);
  }



}
