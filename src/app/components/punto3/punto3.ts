import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cartas } from '../../models/cartas';

@Component({
  selector: 'app-punto3',
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css',
})
export class Punto3 {

  cartas: Cartas[] = [];

  cartasSeleccionadas: Cartas[] = [];

  intentos: number = 10;

  juegoIniciado: boolean = false;

  juegoTerminado: boolean = false;

  puedeIntentar: boolean = false;

  imagenTapada: string = 'assets/Signo.png';

  imagenes: string[] = [

    'assets/React.png',
    'assets/JavaScript.png',
    'assets/Python.png',
    'assets/Java.png',
    'assets/GitHub.png',
    'assets/Docker.png'

  ];

  constructor() {

    this.generarTablero();

  }

  iniciarJuego() {

    this.juegoTerminado = false;

    this.juegoIniciado = true;

    this.puedeIntentar = false;

    this.intentos = 10;

    this.cartasSeleccionadas = [];

    this.generarTablero();

  }

  habilitarIntento() {

    if (!this.juegoTerminado) {

      this.puedeIntentar = true;

    }

  }

  seleccionarCarta(carta: Cartas) {

    if (this.juegoTerminado) return;

    if (!this.juegoIniciado) return;

    if (!this.puedeIntentar) return;

    if (carta.descubierta || carta.encontrada) return;

    if (this.cartasSeleccionadas.length === 2) return;

    carta.descubierta = true;

    this.cartasSeleccionadas.push(carta);

    if (this.cartasSeleccionadas.length === 2) {

      setTimeout(() => {

        this.verificarCartas();

      }, 800);

    }

  }

  verificarCartas() {

    const [carta1, carta2] = this.cartasSeleccionadas;

    if (carta1.imagen === carta2.imagen) {

      carta1.encontrada = true;

      carta2.encontrada = true;

      if (this.cartas.every(c => c.encontrada)) {

        this.juegoTerminado = true;

      }

    } else {

      carta1.descubierta = false;

      carta2.descubierta = false;

      this.intentos--;

    }

    if (this.intentos <= 0) {

      this.juegoTerminado = true;

    }

    this.cartasSeleccionadas = [];

    this.puedeIntentar = false;

  }

  juegoGanado(): boolean {

    return this.cartas.length > 0 &&
      this.cartas.every(c => c.encontrada);

  }

  juegoPerdido(): boolean {

    return this.intentos <= 0;

  }

  reiniciarJuego() {

    this.juegoIniciado = false;

    this.juegoTerminado = false;

    this.puedeIntentar = false;

    this.intentos = 10;

    this.cartasSeleccionadas = [];

    this.generarTablero();

  }

  generarTablero() {

    let cartasDuplicadas =
      this.imagenes.concat(this.imagenes);

    cartasDuplicadas.sort(() => Math.random() - 0.5);

    this.cartas = cartasDuplicadas.map((img, index) => ({

      id: index,

      imagen: img,

      descubierta: false,

      encontrada: false

    }));

  }
}
