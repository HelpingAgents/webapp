import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './pages/register/register.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { VerifyAgainComponent } from './pages/verify-again/verify-again.component';
import { VerifyProgressComponent } from './pages/verify-progress/verify-progress.component';
import { environment } from '../environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		IntroductionComponent,
		RegisterComponent,
		VerifyAgainComponent,
		VerifyProgressComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
