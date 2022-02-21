import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillpayPage } from './billpay.page';

const routes: Routes = [
  {
    path: '',
    component: BillpayPage
  },
  {
    path: 'water',
    loadChildren: () => import('./water/water.module').then( m => m.WaterPageModule)
  },
  {
    path: 'electricity',
    loadChildren: () => import('./electricity/electricity.module').then( m => m.ElectricityPageModule)
  },
  {
    path: 'mobile',
    loadChildren: () => import('./mobile/mobile.module').then( m => m.MobilePageModule)
  },
  {
    path: 'dth',
    loadChildren: () => import('./dth/dth.module').then( m => m.DthPageModule)
  },
  {
    path: 'broadband',
    loadChildren: () => import('./broadband/broadband.module').then( m => m.BroadbandPageModule)
  },
  {
    path: 'gas',
    loadChildren: () => import('./gas/gas.module').then( m => m.GasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillpayPageRoutingModule {}
