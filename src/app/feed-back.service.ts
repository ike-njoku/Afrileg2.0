import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class FeedBackService {
  // create an emppty array which is the error message
  feedBack: string[] = [];
  // create a property (optional) called response type (negative or positive .....(check addfeedBack) )
  feedBackType: boolean;

  // add an error message (and an optional response which lets us know how to present it in the view)
  addfeedBack(message: string, feedbacktype?: boolean){
    // clear the feedBack(s) in the 'feedBack' array to ensure that only one error message is being displayed at a time
    this.clearfeedBack();

    // this method takes a parameter that is the message to be added adds it to the empty array
    this.feedBack.push(message);
    this.feedBackType  = feedbacktype;

    // resetfeedBackType
    this.resetfeedBackType();
  }

  // setTimeout to remove the feedBack

  resetfeedBackType(){
     // clear the feedBack
    setTimeout(() => {this.feedBackType = false; this.clearfeedBack(); }, 900);

  }



  // clear the message(s)
  clearfeedBack(){
    // sets feedBack to an empty array
    this.feedBack = [];
  }

  constructor() { }
}
