import { ErrorService } from './../error.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // cart details url(shouldnt be changed)

  // property cart details (will be assigned values returned by the cart service)
  cartDetails;

  constructor(
    // cart service to add/ remove /fetch cart detail
    private cartService: CartService,
    private errorMessageService: ErrorService
    ) { }

  // get the cart details (using cart service)
  getCartDetails(){
    this.cartService.getCartDetails()
    // subscribe to cart service from this component
        .subscribe(cartDetails => this.cartDetails = cartDetails);
  }

  // remove product from cart
  removeProduct(){
    this.cartService.removeProduct();
    // display the error message
    this.errorMessageService.addErrorMessage('Removed This Product', true);
  }

  ngOnInit(): void {
    // get cart details when the view is initialized
    this.getCartDetails();
  }



}

