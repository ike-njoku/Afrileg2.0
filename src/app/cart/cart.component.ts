import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // property cart details (will be assigned values returned by the cart service)
  cartDetails;

  constructor(private cartService: CartService) { }

  // get the cart details (using cart service)
  getCartDetails(){
    this.cartService.getCartDetails()
    // subscribe to cart service from this component
        .subscribe(cartDetails => this.cartDetails = cartDetails);
  }

  ngOnInit(): void {
    // get cart details when the view is initialized
    this.getCartDetails();
  }

}
