import { CATEGORIES } from './../mocdCategoriesDelete';
import { Component, OnInit } from '@angular/core';
import { Category } from '../categoryIntercace';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  // this.categories of type category(category interface) is equal caategories returned from server
  categories: Category[] = CATEGORIES;

categoryVisibility = false;
  // hiding and displaying the dropdowns is contained in the script.js file
  showCategories(){
    this.categoryVisibility = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
