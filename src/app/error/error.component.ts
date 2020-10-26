import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  // initialize the property
  constructor(public errorMessageService: ErrorService) {}


  ngOnInit(): void {
  }

}
