import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DthPageRoutingModule } from './dth-routing.module';

import { DthPage } from './dth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DthPageRoutingModule
  ],
  declarations: [DthPage]
})
export class DthPageModule {}
