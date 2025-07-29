import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageSeparator2Page } from './image-separator2.page';

const routes: Routes = [
  {
    path: '',
    component: ImageSeparator2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageSeparator2PageRoutingModule {}
