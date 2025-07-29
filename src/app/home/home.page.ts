import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  fam: string | null = null; // 🔹 Guardará el ID de la URL
 cantidad: string | null = null; 
  constructor(private route: ActivatedRoute) {}
  goToPictures(){}
  ngOnInit() {
    this.fam = this.route.snapshot.paramMap.get('fam'); // 🔹 Obtiene el ID de la URL
      this.cantidad = this.route.snapshot.paramMap.get('cantidad'); // 🔹 Obtiene el ID de la URL

  }
  
  
}
