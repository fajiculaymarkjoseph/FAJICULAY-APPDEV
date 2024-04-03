import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = false;
  num = 0;
  constructor() { }
  canActivate() {
    return this.authenticated;
  }
  
}
