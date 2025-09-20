import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';
import { EventCardsComponent } from '../event-cards/event-cards.component';
import { GroomAndBrideComponent } from '../groom-and-bride/groom-and-bride.component';
import { DressCodeComponent } from '../dress-code/dress-code.component';
import { PictureUploadComponent } from '../picture-upload/picture-upload.component';
import { RSVPComponent } from '../rsvp/rsvp.component';
import { BannerComponent } from '../banner/banner.component';
import { HomePageRoutingModule } from './home-routing.module';
import { VideoComponentComponent } from '../video-component/video-component.component';
import { ImageSeparatorPage } from '../image-separator/image-separator.page';
import { ImageSeparator2Page } from '../image-separator2/image-separator2.page';
import { ImageSeparator3Page } from '../image-separator3/image-separator3.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    EventCardsComponent,
    PhotoGalleryComponent,
    GroomAndBrideComponent,
    DressCodeComponent,
    PictureUploadComponent,
    RSVPComponent,
    BannerComponent,
    VideoComponentComponent,
    ImageSeparatorPage,
    ImageSeparator2Page,
    ImageSeparator3Page,
    
    
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
