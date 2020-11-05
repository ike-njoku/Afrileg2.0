import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateInputService {

  checkUnwantedCharacters(input: string){
    return(input);
  }

  constructor() { }
}
