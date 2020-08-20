import { Component, OnInit } from '@angular/core';
import { Category } from '../categoryIntercace';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category = {
    id: 1,
    name: 'Agriculture'
  };


  constructor() { }

  ngOnInit(): void {
  }

}
