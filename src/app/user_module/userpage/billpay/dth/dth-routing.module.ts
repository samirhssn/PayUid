import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DthPage } from './dth.page';

const routes: Routes = [
  {
    path: '',
    component: DthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DthPageRoutingModule {}
