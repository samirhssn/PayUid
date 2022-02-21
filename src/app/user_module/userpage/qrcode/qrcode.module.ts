import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrcodePageRoutingModule } from './qrcode-routing.module';

import { QrcodePage } from './qrcode.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    QrcodePageRoutingModule,
    NgxQRCodeModule,
    BarcodeScanner,
    Base64ToGallery,
  ],
  declarations: [QrcodePage]
})
export class QrcodePageModule {}
