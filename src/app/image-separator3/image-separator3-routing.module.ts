import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageSeparator3Page } from './image-separator3.page';

const routes: Routes = [
  {
    path: '',
    component: ImageSeparator3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageSeparator3PageRoutingModule {}
