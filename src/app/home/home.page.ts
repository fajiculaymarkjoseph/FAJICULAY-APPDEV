import { Component } from '@angular/core';
import { SpageService } from '../spage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  LinkAthenticate = false
    
  email: String = 'admin'
  Password:string = 'password'
  Rpassword:String  = 'password'
  Fname:String = ''
  Lname:string = ''
  constructor(private SpageService:SpageService,private router:Router) {}
  login() {
    
    
    
      this.router.navigate(['npage']);
   
  }
}