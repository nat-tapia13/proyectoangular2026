import { Injectable } from '@angular/core';
import { Inscripciones } from '../models/inscripciones';

@Injectable({
  providedIn: 'root',
})
export class InscripcionService {

  private inscripciones: Inscripciones[] = [

    { dni: '40111222', precio: 50000, categoriaAlumno: 1, fechaInscripcion: '2026-05-10', email: 'juan@gmail.com', curso: 'Angular', total: 32500 },
    { dni: '38999111', precio: 60000, categoriaAlumno: 2, fechaInscripcion: '2026-05-08', email: 'maria@gmail.com', curso: 'React', total: 30000 },
    { dni: '42123456', precio: 45000, categoriaAlumno: 3, fechaInscripcion: '2026-05-02', email: 'carlos@gmail.com', curso: 'Python', total: 45000 },
    { dni: '37888999', precio: 70000, categoriaAlumno: 1, fechaInscripcion: '2026-04-28', email: 'laura@gmail.com', curso: 'Java', total: 45500 },
    { dni: '41222333', precio: 55000, categoriaAlumno: 2, fechaInscripcion: '2026-04-25', email: 'sofia@gmail.com', curso: 'Docker', total: 27500 },
    { dni: '39999888', precio: 48000, categoriaAlumno: 3, fechaInscripcion: '2026-04-20', email: 'pedro@gmail.com', curso: 'GitHub', total: 48000 },
    { dni: '43333444', precio: 65000, categoriaAlumno: 1, fechaInscripcion: '2026-04-15', email: 'lucas@gmail.com', curso: 'JavaScript', total: 42250 },
    { dni: '44555666', precio: 52000, categoriaAlumno: 2, fechaInscripcion: '2026-04-10', email: 'ana@gmail.com', curso: 'TypeScript', total: 26000 }

  ];

  constructor() { }

  obtenerInscripciones(): Inscripciones[] {

    return this.inscripciones;

  }

  agregarInscripcion(inscripcion: Inscripciones): void {

    this.inscripciones.push(inscripcion);

  }

  eliminarInscripcion(index: number): void {

    this.inscripciones.splice(index, 1);

  }

  editarInscripcion(index: number, nuevaInscripcion: Inscripciones): void {

    this.inscripciones[index] = nuevaInscripcion;

  }

}
