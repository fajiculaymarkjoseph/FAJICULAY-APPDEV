import { Component } from '@angular/core';

@Component({
  templateUrl: 'my-custom-page.html',
})
export class MyCustomPage {
  assignmentMessage = "Hello, We are the CodeCrafters";
  constructor() {}

  ionViewWillEnter(){
    console.log('ionViewWillEnter event fired');

  }
}