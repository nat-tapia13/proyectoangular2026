import { Component } from '@angular/core';
import { Eventos } from '../../models/eventos';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {

  eventos: Eventos[] = [
    
    {titulo: 'Taller de Angular', descripcion: 'Angular 18 trae mejoras de rendimiento y nuevas herramientas de desarrollo para una mejor eficiencia', img: 'assets/TallerAngular.png'},
    {titulo: 'Taller de React', descripcion: 'Explora las novedades de la biblioteca de UI más popular y su ecosistema actual en el taller de React 18', img: 'assets/TallerReact.png'},
    {titulo: 'Torneo de Desarrollo de Juegos', descripcion: 'Demuestra tus habilidades creando un videojuego en 48 horas utilizando Python', img: 'assets/TorneoJuego.png'},
    {titulo: 'Conferencia de IA', descripcion: 'Charlas sobre inteligencia artificial y machine learning destacan avances en modelos de lenguaje y aplicaciones prácticas', img: 'assets/ConferenciaIA.png'},
    
  ];
  
  indiceActual = 0;

  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.eventos.length;
  }

  anterior() {
    this.indiceActual = (this.indiceActual - 1 + this.eventos.length) % this.eventos.length;
  }

}
