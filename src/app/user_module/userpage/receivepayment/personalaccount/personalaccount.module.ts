import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalaccountPageRoutingModule } from './personalaccount-routing.module';

import { PersonalaccountPage } from './personalaccount.page';
import { ErrorMessageComponent } from 'src/app/components/error-message/error-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalaccountPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    PersonalaccountPage,
    ErrorMessageComponent
  
  ]
})
export class PersonalaccountPageModule {}
