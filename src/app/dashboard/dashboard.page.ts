import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpageService } from '../spage.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user:string =''
  constructor(private router:Router,private authenticated:AuthService) {

    if(this.authenticated.num == 1){
      this.user = 'admin';
    } else if (this.authenticated.num == 2){
      this.user = 'MJ123';
    }
   }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['npage']);
  }

  Calculator() {
    this.router.navigate(['']);
  }
}

