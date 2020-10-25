import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  // create an emppty array which is the error message
  errorMessage: string[] = [];
  // add an error message
  addErrorMessage(message: string){
    // this method takes a parameter that is the message to be added adds it to the empty array
    this.errorMessage.push(message);
  }

  constructor() { }
}
