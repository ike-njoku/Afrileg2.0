import { PRODUCTS } from './../mockProductsDelete';
import { Products } from './../productInterface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hot-selling',
  templateUrl: './hot-selling.component.html',
  styleUrls: ['./hot-selling.component.css']
})
export class HotSellingComponent implements OnInit {
  products: Products[] = PRODUCTS;
  constructor() { }

  ngOnInit(): void {
  }

}
