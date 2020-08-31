import { Products } from './../productInterface';
import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mockProductsDelete';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {

  products: Products [] = PRODUCTS.slice();

  // selected Product
  selectedProduct: Products;

  // selectedProduct takes a parameter product of type products
  selectProduct(product: Products){
    this.selectedProduct = product;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
