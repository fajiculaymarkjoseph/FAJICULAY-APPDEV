import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePage } from './home/home.page';
import { NpagePage } from './npage/npage.page';

@Injectable({
  providedIn: 'root'
})

export class SpageService {
  
  private isLoggedIn: boolean = false;

  constructor() { }

  login() {
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
