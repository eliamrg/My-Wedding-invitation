import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageSeparator2PageRoutingModule } from './image-separator2-routing.module';

import { ImageSeparator2Page } from './image-separator2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageSeparator2PageRoutingModule
  ],
  declarations: [ImageSeparator2Page]
})
export class ImageSeparator2PageModule {}
