import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.page.html',
  styleUrls: ['./my-user.page.scss'],
})
export class MyUserPage implements OnInit {

  constructor(private router: Router) { }

  Back(){
    this.router.navigate(['home'])
  }

  ngOnInit() {
  }

}
