import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineCustomElements} from '@ionic/pwa-elements/loader';


if ( !navigator.geolocation){
  alert ('Navegador no soporta la Geolocalización');
  throw new Error ('Navegador no soporta la Geolocalización');
}



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements(window)