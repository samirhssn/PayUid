import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserpagePage } from './userpage.page';

const routes: Routes = [
  {
    path: '',
    component: UserpagePage
  },
  {
    path: 'makepayment',
    loadChildren: () => import('./makepayment/makepayment.module').then( m => m.MakepaymentPageModule)
  },
  {
    path: 'recievepayment',
    loadChildren: () => import('./receivepayment/receivepayment.module').then( m => m.ReceivepaymentPageModule)
  },
  {
    path: 'billpay',
    loadChildren: () => import('./billpay/billpay.module').then( m => m.BillpayPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
 
  
  {
    path: 'push-notification',
    loadChildren: () => import('./push-notification/push-notification.module').then( m => m.PushNotificationPageModule)
  },
  
 
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserpagePageRoutingModule {}
