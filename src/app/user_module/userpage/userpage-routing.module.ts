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
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserpagePageRoutingModule {}
