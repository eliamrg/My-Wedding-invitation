import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-gallery',
  standalone: true, // ⬅️ Agregar esta línea si el componente no tiene un módulo
  imports: [CommonModule], // ⬅️ Importar CommonModule para que funcione *ngFor
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}


  photos: string[] = [
    '../../assets/photos/DefaultBanner.webp',
    '../../assets/photos/DefaultBanner.webp',
    '../../assets/photos/DefaultBanner.webp',
    '../../assets/photos/DefaultBanner.webp',
    '../../assets/photos/DefaultBanner.webp',
    '../../assets/photos/DefaultBanner.webp',

  ];
}
