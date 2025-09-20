import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FirebasequeryService } from '../firebasequery.service';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [CommonModule, IonicModule], 
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.scss'],
})
export class RSVPComponent implements OnInit {
  @Input() fam: string | null = null;     // 🔹 Recibe el ID de HomePage
  @Input() cantidad: string | null = null; // 🔹 Recibe el ID de HomePage

  InfoInvitado: { Nombre: string; Cantidad: string } = {
    Nombre: '',
    Cantidad: ''
  };

  constructor(private firestore: FirebasequeryService) {}

  async ngOnInit() {
    // 🔹 Decodifica doble por si viene doble encode (%2520 → %20 → " ")
    let nombre = this.fam || '';
    try {
      nombre = decodeURIComponent(nombre);
      nombre = decodeURIComponent(nombre);
    } catch (e) {
      console.warn("Error al decodificar nombre:", e);
    }

    this.InfoInvitado.Nombre = nombre || 'Invitado no registrado, favor de contactar a Santiago';
    this.InfoInvitado.Cantidad = this.cantidad ? decodeURIComponent(this.cantidad) : '0';

    console.log(this.InfoInvitado.Nombre);
  }

  ConfirmarNovio() {
    const url = `https://wa.me/5218112726371?text=¡Hola%20Santiago!%20Confirmo%20mi%20asistencia%20a%20la%20boda.%20Mi%20nombre%20es%20${encodeURIComponent(this.InfoInvitado.Nombre)}%20y%20asistiremos%20${encodeURIComponent(this.InfoInvitado.Cantidad)}%20personas.`;
    window.open(url, '_blank');
  }

  ConfirmarNovia() {
    const url = `https://wa.me/5218134425979?text=¡Hola%20Aleida!%20Confirmo%20mi%20asistencia%20a%20la%20boda.%20Mi%20nombre%20es%20${encodeURIComponent(this.InfoInvitado.Nombre)}%20y%20asistiremos%20${encodeURIComponent(this.InfoInvitado.Cantidad)}%20personas.`;
    window.open(url, '_blank');
  }
}
