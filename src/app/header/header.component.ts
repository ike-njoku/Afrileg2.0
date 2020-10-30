import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // variable to hold the cartdetails
  cartDetails;

  // hide or display the dropdown menu
  displayProfileDropDown = false;
  showDropDown(){
    if (this.displayProfileDropDown === false){
      this.displayProfileDropDown  = true;
    }else{
      this.displayProfileDropDown = false;
    }
  }




  // cart service
  constructor(private cartService: CartService) { }

  // get cart details
  getCartDetails(){
    this.cartService.getCartDetails()
    // subscribe to the cart service
        .subscribe((cartDetails) => this.cartDetails = cartDetails)
  }

  ngOnInit(): void {
    this.getCartDetails();
  }

}
