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
  @Input() fam: string | null = null; // 🔹 Recibe el ID de HomePage
  @Input() cantidad: string | null = null; // 🔹 Recibe el ID de HomePage

  InfoInvitado: { Nombre: string; Cantidad: string } = {
    Nombre: this.fam || '',
    Cantidad:this.cantidad || '',

  };

  constructor(private firestore: FirebasequeryService) {}

  async ngOnInit() {
    this.InfoInvitado.Nombre=this.fam|| 'Invitado no registrado, favor de contactar a Santiago'
    this.InfoInvitado.Cantidad=this.cantidad||'0';
    // console.log(this.id)
    // if (this.id) {
    //   try {
    //     const doc = await this.firestore.getInformacionInvitado(this.id); // 🔹 Usa el ID recibido
    //     if (doc) {
    //       this.InfoInvitado.Nombre = doc['Nombre'] || 'Invitado no registrado, favor de contactar a Santiago';
    //       this.InfoInvitado.Cantidad = doc['Cantidad'] ?? 0;
    //     }
    //     console.log(this.InfoInvitado);
    //   } catch (error) {
    //     console.error("Error al obtener la información del invitado:", error);
    //   }
    // } else {
    //   console.warn("No se recibió un ID válido en el componente RSVP.");
    // }
  }
}
