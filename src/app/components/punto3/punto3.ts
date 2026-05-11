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
  imagenTapada: string = 'assets/Signo.png';
  mensajeFinal: string = '';
  tipoMensaje: 'victoria' | 'derrota' | '' = '';
  bloqueado: boolean = false;


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
    this.intentos = 10;
    this.cartasSeleccionadas = [];
    this.cartas = [];
    let cartasDuplicadas = [

      ...this.imagenes,
      ...this.imagenes

    ];

    cartasDuplicadas.sort(() => Math.random() - 0.5);

    this.cartas = cartasDuplicadas.map((img, index) => ({
      id: index, imagen: img, descubierta: false, encontrada: false

    }));

  }

  seleccionarCarta(carta: Cartas) {

    if (this.juegoTerminado) return;

    if (!this.juegoIniciado) return;

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
      // --- CASO: ACIERTO ---
      carta1.encontrada = true;
      carta2.encontrada = true;

      // Llamamos a tu método de ganar para que verifique el tablero
      this.juegoGanado();

    } else {
      // --- CASO: ERROR ---
      carta1.descubierta = false;
      carta2.descubierta = false;

      this.intentos--; // Restamos el intento

      // LLAMAMOS AQUÍ a tu método de perder
      this.juegoPerdido();
    }

    this.cartasSeleccionadas = [];
  }
  juegoGanado(): void {
  if (this.cartas.length > 0 && this.cartas.every(c => c.encontrada)) {
    this.mensajeFinal = "¡FELICIDADES! Has descubierto todo las cartas.";
    this.tipoMensaje = 'victoria';
    this.juegoTerminado = true;
    this.bloqueado = true;
    this.juegoIniciado = true; // Asegúrate de que esto siga en true para que el HTML no se oculte
    console.log("Estado actual:", this.tipoMensaje); // Debe decir 'victoria'
  }
}
  reiniciarJuego() {

    this.juegoIniciado = false;
    this.juegoTerminado = false;
    this.bloqueado = false;
    this.intentos = 10;
    this.cartasSeleccionadas = [];
    this.cartas = [];
    this.tipoMensaje = '';      // <--- LIMPIAR EL MENSAJE
    this.mensajeFinal = '';
    this.generarTablero();

  }

  juegoPerdido(): void {
  if (this.intentos <= 0) { 
    this.mensajeFinal = "SE ACABARON LOS INTENTOS ¡Vuelve a intentarlo nuevamente!";
    this.tipoMensaje = 'derrota';
    this.juegoTerminado = true; // <--- IMPORTANTE
    this.bloqueado = true;
    //console.log("Estado actual:", this.tipoMensaje); // Debe decir 'derrota'
  }
}

  generarTablero() {

    let cartasDuplicadas = this.imagenes.concat(this.imagenes);

    cartasDuplicadas.sort(() => Math.random() - 0.5);

    this.cartas = cartasDuplicadas.map((img, index) => ({
      id: index, imagen: img, descubierta: false, encontrada: false

    }));

  }

}
