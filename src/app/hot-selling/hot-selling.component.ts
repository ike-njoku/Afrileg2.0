import { PRODUCTS } from './../mockProductsDelete';
import { Products } from './../productInterface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hot-selling',
  templateUrl: './hot-selling.component.html',
  styleUrls: ['./hot-selling.component.css']
})
export class HotSellingComponent implements OnInit {
  // products of type Product Interface (array) = the array of products returned by the hero Sercice
  products: Products[] = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
