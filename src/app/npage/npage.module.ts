import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NpagePageRoutingModule } from './npage-routing.module';

import { NpagePage } from './npage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NpagePageRoutingModule
  ],
  declarations: [NpagePage]
})
export class NpagePageModule {}
