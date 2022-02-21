import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceivepaymentPageRoutingModule } from './receivepayment-routing.module';

import { ReceivepaymentPage } from './receivepayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceivepaymentPageRoutingModule
  ],
  declarations: [ReceivepaymentPage]
})
export class ReceivepaymentPageModule {}
