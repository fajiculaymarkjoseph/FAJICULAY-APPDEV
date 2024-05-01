import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string = '';
  password: string = '';
  reTypePassword: string = '';
  
  constructor(private alertController: AlertController, private router: Router,private authService:AuthService) {}
    
  
  ngOnInit() {
  }
  
  async signUp() {
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.email, this.password)
      .then((userCredential) => {

        const user = userCredential.user;
        this.presentAlert('Success', 'Sign-Up Successfully!');
        this.router.navigate(['signup']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(error);
    });

    this.email = '';
    this.password = '';
    this.reTypePassword = '';
    
  }
async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
  login() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredential) => {
      const user = userCredential.user;
      this.authService.setAuthentication(true);
      this.presentAlert('Success', 'Log-in Successfully!');
      this.router.navigate(['portfolio']);
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

async presentAlerta(header: string, message: string) {
  const alert = await this.alertController.create({
    header: header,
    message: message,
    buttons: ['OK']
  });

  await alert.present();
}

  

  
}
