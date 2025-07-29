import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-video-component',
  standalone: true,
   imports: [CommonModule, IonicModule], 
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.scss'],
})
export class VideoComponentComponent implements AfterViewInit {
  @ViewChild('myVideo', { static: false }) videoRef!: ElementRef<HTMLVideoElement>;

  isPlaying = false;

  ngAfterViewInit() {
    const video = this.videoRef.nativeElement;
    video.play()
      .then(() => {
        this.isPlaying = true;
      })
      .catch(() => {
        // Autoplay bloqueado, esperar interacción del usuario
        this.isPlaying = false;
      });
  }

  playVideo() {
    if (this.isPlaying) return; // ya está reproduciendo

    const video = this.videoRef.nativeElement;
    video.play()
      .then(() => {
        this.isPlaying = true;
      })
      .catch(err => {
        console.warn('Error al reproducir:', err);
      });
  }
}
