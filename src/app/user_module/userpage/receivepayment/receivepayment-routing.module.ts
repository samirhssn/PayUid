import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivepaymentPage } from './receivepayment.page';

const routes: Routes = [
  {
    path: '',
    component: ReceivepaymentPage
  },
  {
    path: 'personalaccount',
    loadChildren: () => import('./personalaccount/personalaccount.module').then( m => m.PersonalaccountPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceivepaymentPageRoutingModule {}
