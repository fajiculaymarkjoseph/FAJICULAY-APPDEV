import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupCRUDPageRoutingModule } from './signup-crud-routing.module';

import { SignupCRUDPage } from './signup-crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupCRUDPageRoutingModule
  ],
  declarations: [SignupCRUDPage]
})
export class SignupCRUDPageModule {}
