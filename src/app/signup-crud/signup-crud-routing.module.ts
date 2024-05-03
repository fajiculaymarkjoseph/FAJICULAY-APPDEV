import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupCRUDPage } from './signup-crud.page';

const routes: Routes = [
  {
    path: '',
    component: SignupCRUDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupCRUDPageRoutingModule {}
