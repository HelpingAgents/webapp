import 'hammerjs';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
	enableProdMode();
}

function isRunningStandalone() {
	return window.matchMedia('(display-mode: standalone)').matches;
}

function bootstrapApp() {
	platformBrowserDynamic()
		.bootstrapModule(AppModule)
		.catch(err => console.error(err));
}

if (isRunningStandalone()) {
	setTimeout(() => bootstrapApp(), 1750);
} else {
	bootstrapApp();
}
