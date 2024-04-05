import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpageService } from '../spage.service';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-npage',
  templateUrl: './npage.page.html',
  styleUrls: ['./npage.page.scss'],
})
export class NpagePage implements OnInit {
  volume = 100;
  user : string = ''
  route: any;
  condition: boolean = true;
  constructor(private router : Router,
    private authenticated : AuthService,
    private modalController : ModalController,
    private alertController : AlertController,
    private toastController : ToastController,
    private navCtrl: NavController) {  

      if(this.authenticated.num == 0){
        this.router.navigate(['home'])  
      }
     else if(this.authenticated.num == 1){
      this.user = 'admin';
    } else if (this.authenticated.num == 2){
      this.user = 'MJ123';
    }
   }

    
    

  ngOnInit() {
  }
 
  logout(){
    this.router.navigate(['/home']);
    this.authenticated.num = 0;
    
  }
  async closemodal(){
    await this.modalController.dismiss();
  }

  async alert(){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'subtitle',
      message: 'This is an Alert',
      buttons: ['ok']
    });
    await alert.present();
  }

  async toast(){
    const toast = await this.toastController.create({
      message: 'This is a 2 second Toast',
      duration: 2000
    });
    await toast.present();
  }

  async closetoast(){
    const toast = await this.toastController.getTop();
    if(toast){
      toast.dismiss();
    }
  }

  dashboard() {
    this.router.navigate(['dashboard']);
  }

  goToCalculator() {
    this.route.navigate(['']);
  }
}



