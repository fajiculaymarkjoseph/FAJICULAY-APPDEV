import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton } from '@ionic/angular';
import { AuthenticationService } from 'src/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(private authenticationService : AuthenticationService, private route : Router) {}

  goWithAuthentication(){
    this.authenticationService.authenticated = true;

  }


  Authentication(buttonName: string){

      if(buttonName === 'button1'){
        this.route.navigate(['blank']);
      }else if (buttonName === 'button2'){
        
        if(this.authenticationService.authenticated == true){
          this.route.navigate(['page2']);
        }
      }
    this.authenticationService.authenticated = false;
  }

  event(){
      this.route.navigate(['blank']);
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }

  ionViewWillEnter(){
    console.log('You Will Enter the Home Page');
  }

  ionViewDidEnter(){
    console.log('You Did Enter the Home Page');
  }

  ionViewWillLeave(){
    console.log('You Will Leave the Home Page');
  }

  ionViewDidLeave(){
    console.log('You Did Leave the Home Page');
  }
}