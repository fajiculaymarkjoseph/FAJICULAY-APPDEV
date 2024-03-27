import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NpagePage } from './npage.page';

const routes: Routes = [
  {
    path: '',
    component: NpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpagePageRoutingModule {}
