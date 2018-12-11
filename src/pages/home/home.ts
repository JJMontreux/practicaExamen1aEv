import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pagina1Page } from '../pagina1/pagina1'; // <-- Autoimportada al añadir la clase al método irAPagina1()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


// Método para ir a la página pagina1
irAPagina1():void {
  this.navCtrl.push(Pagina1Page);
}

}
