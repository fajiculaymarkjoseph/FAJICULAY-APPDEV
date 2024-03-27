import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpageService {
  athenticate = false
 validUser:string = ''
  validPass:String ='password' 
  constructor() {}
  
  isValidPassword(Password: string):boolean{
  return this.validUser.includes(Password);
  }
  isValidEmail(email: string):boolean{
    return this.validUser.includes(email);
    }
}
