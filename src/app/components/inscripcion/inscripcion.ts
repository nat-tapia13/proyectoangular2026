import { Component } from '@angular/core';
import { Inscripciones } from '../../models/inscripciones';
import { InscripcionService } from '../../servicios/inscripcionService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscripcion',
  imports: [CommonModule, FormsModule],
  templateUrl: './inscripcion.html',
  styleUrl: './inscripcion.css',
})
export class Inscripcion {

  mostrarFormulario: boolean = false;

  inscripcion: Inscripciones = new Inscripciones();

  listaInscripciones: Inscripciones[] = [];

  precioFinal: number = 0;

  constructor(
    private inscripcionService: InscripcionService
  ) {

    this.listaInscripciones =
      this.inscripcionService.obtenerInscripciones();

  }

  toggleFormulario() {

    this.mostrarFormulario =
      !this.mostrarFormulario;

  }

  calcularTotal() {

    const precio = Number(this.inscripcion.precio);
    const categoria = Number(this.inscripcion.categoriaAlumno);

    if (precio > 0 && categoria > 0) {
      let descuento = 0;

      switch (categoria) {
        case 1: // Estudiante
          descuento = 0.35;
          break;
        case 2: // Egresado
          descuento = 0.50;
          break;
        case 3: // Particular
          descuento = 0;
          break;
      }

      this.precioFinal = precio - (precio * descuento);
      this.inscripcion.total = this.precioFinal;
    } else {
      this.precioFinal = 0;
    }
  }

  registrar() {

    this.inscripcion.total = this.precioFinal;
    this.inscripcion.fechaInscripcion = new Date().toISOString();

    this.inscripcionService.agregarInscripcion({ ...this.inscripcion });
    this.listaInscripciones = [...this.inscripcionService.obtenerInscripciones()];
    this.inscripcion = new Inscripciones();
    this.precioFinal = 0;
    this.mostrarFormulario = false;
  }

  cantidadEstudiantes(): number {

    return this.listaInscripciones.filter( item => item.categoriaAlumno === 1 ).length;

  }

  cantidadEgresados(): number {

    return this.listaInscripciones.filter( item => item.categoriaAlumno === 2 ).length;

  }

  cantidadParticulares(): number {

    return this.listaInscripciones.filter( item => item.categoriaAlumno === 3 ).length;

  }

  totalGeneral(): number {

    return this.listaInscripciones.reduce( (acc, item) => acc + item.total, 0 );

  }

}
