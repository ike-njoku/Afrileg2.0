import { Component, OnInit } from '@angular/core';
import { Category } from '../categorieyIntercace';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = [
    'Agriculture',
    'Technology',
    'Ternary',
    'Textile'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
