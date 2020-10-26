import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ErrorService {
  // create an emppty array which is the error message
  errorMessage: string[] = [];
  // create a property (optional) called response type (negative or positive .....(check addErrorMessage) )
  responseType: boolean;

  // add an error message (and an optional response which lets us know how to present it in the view)
  addErrorMessage(message: string, response?: boolean){
    // clear the errorMessage(s) in the 'errorMessage' array to ensure that only one error message is being displayed at a time
    this.clearErrorMessage();

    // this method takes a parameter that is the message to be added adds it to the empty array
    this.errorMessage.push(message);
    this.responseType  = response;

    // resetResponseType
    this.resetResponseType();
  }

  // setTimeout to remove the errorMessage

  resetResponseType(){
    setTimeout(() => this.responseType = false, 900);

    // clear the errorMessage
    // this.clearErrorMessage();
  }



  // clear the message(s)
  clearErrorMessage(){
    // sets errorMessage to an empty array
    this.errorMessage = [];
  }

  constructor() { }
}
