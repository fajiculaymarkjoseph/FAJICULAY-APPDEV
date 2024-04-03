import { Component, OnInit } from '@angular/core';
import { SpageService } from '../spage.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  email: String = ''
  Password:string = ''
  Rpassword:String  = ''
  Fname:String = ''
  Lname:string = ''

  constructor(private authenticated:AuthService,
    private router:Router,
    private toastController:ToastController,
    private alertController: AlertController
    ) {
     
}
    ngOnInit(): void {
      
    }
    async login(){
      if(this.email == 'admin'){
        if(this.Password == '1234'){
          if(this.Rpassword == '1234'){
          const alert = await this.alertController.create({
            header: "Login",
            subHeader: "Status",
            message: "Login Successfully",
            buttons: ['ok']
          });
          await alert.present();
          this.authenticated.authenticated = true;
          this.authenticated.num = 1;
          this.router.navigate(['dashboard']);
        } else{
          const toast = await this.toastController.create({
            message: "Login Failed",
            duration:2000
          });
          toast.present();
        }
      } else if(this.email == 'MJ123'){
        if(this.Password == '12345'){
          if(this.Rpassword == '12345'){
          const alert = await this.alertController.create({
            header: "Login",
            subHeader: "Status",
            message: "Login Successfully",
            buttons: ['ok']
          });
          await alert.present();
          this.authenticated.authenticated = true;
          this.authenticated.num = 2;
          this.router.navigate(['dashboard']);
        } else{
          const toast = await this.toastController.create({
            message: "Login Failed",
            duration:2000
          });
          toast.present();
        }
      } else {
        const toast = await this.toastController.create({
          message: "Login Failed",
          duration:2000
        });
        toast.present();
      }
      
    }
    }
}
}
