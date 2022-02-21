import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalaccountPage } from './personalaccount.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalaccountPageRoutingModule {}
