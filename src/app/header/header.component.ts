import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// hide or display the dropdown menu
  displayProfileDropDown = false;
  showDropDown(){
    if(this.displayProfileDropDown === false){
      this.displayProfileDropDown  = true;
    }else{
      this.displayProfileDropDown = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
