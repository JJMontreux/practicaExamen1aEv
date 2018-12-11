import { PERSONAS } from './../../data/data.personas';
import { Persona } from './../../interfaces/persona.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  // Declaramos el array personas vacío
  personas : Persona [] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // Copiamos el contenido del array data.personas.ts en otro
    // array desde la posición 0
    this.personas = PERSONAS.slice(0);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

}
