import "zone.js";
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { MatrixPageModule } from "./app/pages/matrix-page/matrix-page.module";

if (environment.production) {
  enableProdMode();
}

const mount = () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

export { mount }
