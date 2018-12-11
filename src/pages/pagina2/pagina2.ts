import { PERSONAS } from './../../data/data.personas';
import { Persona } from './../../interfaces/persona.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher, reorderArray } from 'ionic-angular';

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
  ordenando:boolean = false; // <-- Necesario declarar esta variable para gestionar el botón de Ordenar

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // Copiamos el contenido del array data.personas.ts en otro
    // array desde la posición 0
    this.personas = PERSONAS.slice(0);

  }

// Método borrar_persona()
borrar_persona(indice:number)
{
  this.personas.splice(indice, 1);
}

// Método recargar_personas()
/* Recarga las personas tras refrescar al
  dar hacia abajo con el dedo en la pantalla */
  recargar_personas(refresher : Refresher)
  {
    // Ojo a la promesa:
    setTimeout(() => {
      console.log("Inicio del refresh");
      this.personas = PERSONAS.slice(0); // <-- Copia el array personas completo desde la posición inicial (0) de sus elementos
      refresher.complete();
      console.log("Refresh completado");
    }, 2000);

  }

  // Método reordenar_personas()
  reordenar_personas(indices:any)
  {
    console.log(indices);
    this.personas = reorderArray(this.personas, indices);
  }


// Método generado automáticamente al crear al página
  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

}
