import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../productInterface';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Products;

  // display selected Product



  constructor() { }

  ngOnInit(): void {
  }

}
