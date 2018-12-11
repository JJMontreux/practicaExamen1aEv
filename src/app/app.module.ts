import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// import { Pagina1PageModule } from '../pages/pagina1/pagina1.module'; // <-- Añadido al agregar a apartado imports la Pagina1PageModule
import { Pagina1Page } from './../pages/pagina1/pagina1'; // <-- Importado a través de la bombilla del IntelliSense tras añadir la clase Pagina1Page a los apartados entryComponents y declarations



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Pagina1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Pagina1PageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Pagina1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
