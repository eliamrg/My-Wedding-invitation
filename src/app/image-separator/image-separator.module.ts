import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageSeparatorPageRoutingModule } from './image-separator-routing.module';

import { ImageSeparatorPage } from './image-separator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageSeparatorPageRoutingModule
  ],
  declarations: [ImageSeparatorPage]
})
export class ImageSeparatorPageModule {}
