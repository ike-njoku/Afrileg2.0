import { Cart } from './../cartInterface';
import { FeedBackService } from '../feed-back.service';
import { Component, OnInit} from '@angular/core';
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
    // cart service to add/ remove / fetch cart detail
    private cartService: CartService,
    private feedBackService: FeedBackService
    ) { }

  // get the cart details (using cart service)
  getCartDetails(){
    this.cartService.getCartDetails()
    // subscribe to cart service from this component
        .subscribe(cartDetails => this.cartDetails = cartDetails);
  }

  // remove product from car
  removeItem(item: Cart): void{
    // display the error message
    this.feedBackService.addfeedBack( `Removed  ${item.product.name} from Cart`, 900,true);
    // filter the cartItems and remove the deleted one
    this.cartDetails = this.cartDetails.filter(h => h !== item);

    // call the cart service
    this.cartService.removeItem(item).subscribe();
}

  ngOnInit(): void {
    // get cart details when the view is initialized
    this.getCartDetails();
  }



}

