import { Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent  implements AfterViewInit {

  constructor() {}
  goToPictures(){}
  ngAfterViewInit() {
    // Fecha de destino: 9 de noviembre de 2025
    const targetDate = new Date('2025-11-09T00:00:00');

    // Función para actualizar el contador
    const updateCountdown = () => {
      const currentDate = new Date();
      const timeDifference = targetDate.getTime() - currentDate.getTime();

      // Cálculos de días, horas, minutos y segundos
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Actualizar los elementos del DOM
      document.getElementById('days')!.textContent = days.toString();
      document.getElementById('hours')!.textContent = hours.toString();
      document.getElementById('minutes')!.textContent = minutes.toString();
      document.getElementById('seconds')!.textContent = seconds.toString();

      // Si la cuenta regresiva termina
      if (timeDifference < 0) {
        clearInterval(interval);
        document.getElementById('days')!.textContent = '0';
        document.getElementById('hours')!.textContent = '0';
        document.getElementById('minutes')!.textContent = '0';
        document.getElementById('seconds')!.textContent = '0';
        alert("¡La cuenta regresiva ha terminado!");
      }
    };

    // Actualizar el contador cada segundo
    const interval = setInterval(updateCountdown, 1000);

    // Llamar a la función inmediatamente para mostrar el contador desde el principio
    updateCountdown();
  }
}
