import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NpagePage } from './npage.page';

const routes: Routes = [
  {
    path: '',
    component: NpagePage
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../dashboard/dashboard.module').then( m => m.DashboardPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpagePageRoutingModule {}
