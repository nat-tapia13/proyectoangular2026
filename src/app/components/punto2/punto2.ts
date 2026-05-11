import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-punto2',
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css',
})
export class Punto2 {

  productos: Producto[] = [

    { nombre: 'Notebook Asus 13L', descripcion: 'Disco 40GB, 15 pulgadas', img: 'assets/Notebook.png', precio: 45.5 },
    { nombre: 'Monitor LG 14"', descripcion: 'Monitor alta resolución', img: 'assets/Monitor.png', precio: 99 },
    { nombre: 'Teclado Gamer RGB', descripcion: 'Retroiluminado multicolor', img: 'assets/TecladoGamer.png', precio: 25.9 },
    { nombre: 'Mouse Inalámbrico Logitech', descripcion: 'Sensor óptico de alta precisión', img: 'assets/MouseInalambrico.png', precio: 19.5 },
    { nombre: 'Auriculares Sony WH-CH520', descripcion: 'Bluetooth, sonido envolvente', img: 'assets/AuricularSony.png', precio: 59 },
    { nombre: 'Webcam HD 1080p', descripcion: 'Cámara USB para videollamadas', img: 'assets/WebCam.png', precio: 39 },
    { nombre: 'Disco SSD 500GB Kingston', descripcion: 'Almacenamiento rápido NVMe', img: 'assets/DiscoSSD.png', precio: 79.9 },
    { nombre: 'Tablet Samsung Galaxy Tab A7', descripcion: '10.4 pulgadas, 32GB', img: 'assets/Tablet.png', precio: 129.9 },
    { nombre: 'Impresora HP DeskJet 3775', descripcion: 'Todo en uno compacta', img: 'assets/Impresora.png', precio: 89.5 },
    { nombre: 'Smartwatch Xiaomi Mi Band 7', descripcion: 'Pantalla AMOLED, monitoreo salud', img: 'assets/Smartwatch.png', precio: 44.99 },
    { nombre: 'Cámara de Seguridad WiFi', descripcion: 'Detección de movimiento, visión nocturna', img: 'assets/CamaraSeguridad.png', precio: 55.5 },
    { nombre: 'Router TP-Link Archer C6', descripcion: 'Wi-Fi de doble banda, 1200 Mbps', img: 'assets/Router.png', precio: 64.95 }
  ];

  compraRealizada: boolean = false;

  carrito: Producto[] = [];

  agregarAlCarrito(producto: Producto) {

    const productoExistente =
      this.carrito.find(
        item => item.nombre === producto.nombre
      );

    if (productoExistente) {

      productoExistente.cantidad!++;

    } else {

      this.carrito.push({

        ...producto,
        cantidad: 1

      });

    }

  }

  productoEnCarrito(producto: Producto): boolean {

    return this.carrito.some(
      item => item.nombre === producto.nombre
    );

  }

  aumentarCantidad(item: Producto) {

    item.cantidad!++;

  }

  disminuirCantidad(item: Producto) {

    if (item.cantidad! > 1) {

      item.cantidad!--;

    } else {

      this.carrito = this.carrito.filter(
        prod => prod.nombre !== item.nombre
      );

    }

  }

  calcularTotal(): number {

    return this.carrito.reduce(

      (acc, prod) =>

        acc + (prod.precio * prod.cantidad!),

      0

    );

  }

  limpiarCarrito() {

    this.carrito = [];
    this.compraRealizada = false;

  }

  finalizarCompra() {

    this.compraRealizada = true;

    setTimeout(() => {

      this.carrito = [];
      this.compraRealizada = false;

    }, 2000);

  }

}
