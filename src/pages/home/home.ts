import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pagina1Page } from '../pagina1/pagina1'; // <-- Autoimportada al añadir la clase al método irAPagina1()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Variable para trabajar con nombre pasado por input
  nombre = "";

  constructor(public navCtrl: NavController) {

  }


// Método para ir a la página pagina1
irAPagina1():void {
  this.navCtrl.push(Pagina1Page);
}


// Método procesarDatos()
// Abre la página pagina1 pasándole el dato recogido en la página home, y lo muestra en pantalla
public procesarDatos():void {
  this.navCtrl.push(Pagina1Page, {nombre:this.nombre}); // El contenido entre llaves indica que se pase (a Pagina1Page) el valor de la variable this.nombre "envuelto", a su vez, en la variable nombre (nombre:)
}



}
