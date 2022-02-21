import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BroadbandPageRoutingModule } from './broadband-routing.module';

import { BroadbandPage } from './broadband.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BroadbandPageRoutingModule
  ],
  declarations: [BroadbandPage]
})
export class BroadbandPageModule {}
