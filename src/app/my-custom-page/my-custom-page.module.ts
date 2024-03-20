import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MyCustomPageRoutingModule } from './my-custom-page-routing.module';
import { MyCustomPage } from './my-custom-page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCustomPageRoutingModule
  ],
  declarations: [MyCustomPage]
})
export class MyCustomPageModule {}