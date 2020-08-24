import { CATEGORIES } from './../mocdCategoriesDelete';
import { Component, OnInit } from '@angular/core';
import { Category } from '../categoryIntercace';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = CATEGORIES;


  constructor() { }

  ngOnInit(): void {
  }

}
