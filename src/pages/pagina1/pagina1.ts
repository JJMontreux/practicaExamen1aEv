import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina1',
  templateUrl: 'pagina1.html',
})
export class Pagina1Page {

// Variable declarada para almacenar el valor de la variable pasada desde home mediante el botón Enviar
nombre = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // Mediante el atributo navParams obtenemos el valor pasado
    this.nombre = navParams.get("nombre");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina1Page');
  }


  // Método volverAtras()
  volverAtras():void {
    this.navCtrl.pop();
  }

}
