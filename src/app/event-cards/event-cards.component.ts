import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-event-cards',
  standalone: true, // ⬅️ Agregar esta línea si el componente no tiene un módulo
  imports: [CommonModule, IonicModule], 
  templateUrl: './event-cards.component.html',
  styleUrls: ['./event-cards.component.scss'],
})
export class EventCardsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  ubicacionRecepcion(){
const url = 'https://maps.app.goo.gl/PJEUqsE3TCQoDBoA9';
  window.open(url, '_blank');
  }
  ubicacionSalon(){
    const url = 'https://maps.app.goo.gl/xLG5A1WsQUTxZpFE6';
  window.open(url, '_blank');
  }

}
