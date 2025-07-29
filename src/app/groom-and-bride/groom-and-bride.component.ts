import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-groom-and-bride',
  standalone: true, // ⬅️ Agregar esta línea si el componente no tiene un módulo
  imports: [CommonModule, IonicModule], 
  templateUrl: './groom-and-bride.component.html',
  styleUrls: ['./groom-and-bride.component.scss'],
})
export class GroomAndBrideComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
