import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BroadbandPage } from './broadband.page';

const routes: Routes = [
  {
    path: '',
    component: BroadbandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BroadbandPageRoutingModule {}
