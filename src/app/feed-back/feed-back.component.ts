import { Component, OnInit } from '@angular/core';
import { FeedBackService } from '../feed-back.service';

@Component({
  selector: 'app-error',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent implements OnInit {
  // initialize the property
  constructor(public feedBackService: FeedBackService) {}


  ngOnInit(): void {
  }

}
