import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateInputService {

  greet(input: string){
    return(input);
  }

  constructor() { }
}
