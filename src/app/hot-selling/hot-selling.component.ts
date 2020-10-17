// import products service (injected into the constructor)
import { ProductsService } from './../products.service';
// import products interface
import { Products } from './../productInterface';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-hot-selling',
  templateUrl: './hot-selling.component.html',
  styleUrls: ['./hot-selling.component.css']
})
export class HotSellingComponent implements OnInit {
  // products of type Product Interface (array) = the array of products returned by the products Service
  products: Products[];

  // inject the Products service into the constructor
  constructor(private productsService: ProductsService) { }

  // getProducts  (fetch all products)
  getProducts(){
    this.productsService.getProducts()
        .subscribe((products) => this.products = products);
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
