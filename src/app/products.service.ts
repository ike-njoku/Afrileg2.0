import { PRODUCTS } from './mockProductsDelete';
import { Products } from './productInterface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Products[]{
    // what this method does is to return the list of all the
    // products in the database model
    return PRODUCTS;
  }
}
