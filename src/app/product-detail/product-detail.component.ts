import { ProductsService } from './../products.service';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product;
  // display selected Product



  constructor(

    // to get information about this component's url eg productId
    private route: ActivatedRoute,
    // to extract the product's id using the product service
    private productsService: ProductsService,
    // to navigate back to the route tha navigated here
    private location: Location

  ) { }

  // getproduct
  getProduct(){
    // get the snapshot of the parameter (id) *confer approutingModule.ts  and assign it to a constant called 'id'
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    // now that we have gotten the id, return the product with corresponding id using the productService
    this.productsService.getProduct(id)
    // subscribe to the product service from this component
        .subscribe((product) => this.product = product);
  }

  // go back (navigate back) on click of button
  goBack(){
    this.location.back();
  }

  ngOnInit(): void {
    this.getProduct();
  }

}
