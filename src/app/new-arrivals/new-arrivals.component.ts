import { Products } from './../productInterface';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {
  // property products is of type (array of products (from products interface))
  products: Products [];

  // selected Product
  selectedProduct: Products;

  // selectedProduct takes a parameter product of type products
  selectProduct(product: Products){
    this.selectedProduct = product;
  }

  // fetch products using productsService
  getProducts(){
    this.productsService.getProducts()
      // subscribe to the  service to view products returned by products service
        .subscribe((products)=>this.products = products);

  }

  constructor(private productsService: ProductsService) { }


  ngOnInit(): void {
    this.getProducts();
  }

}
