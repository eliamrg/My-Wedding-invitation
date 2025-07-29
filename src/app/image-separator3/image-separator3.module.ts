import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageSeparator3PageRoutingModule } from './image-separator3-routing.module';

import { ImageSeparator3Page } from './image-separator3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageSeparator3PageRoutingModule
  ],
  declarations: [ImageSeparator3Page]
})
export class ImageSeparator3PageModule {}
