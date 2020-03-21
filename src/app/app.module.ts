import { ApiService } from './shared/api/api.service';
import { AppBarLargeComponent } from './shared/app-bar-large/app-bar-large.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArrowComponent } from './shared/arrow/arrow.component';
import { BarComponent } from './shared/bar/bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { CarouselControlComponent } from './shared/carousel-control/carousel-control.component';
import { CloseComponent } from './shared/close/close.component';
import { HttpClientModule } from '@angular/common/http';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LogoComponent } from './shared/logo/logo.component';
import { NgModule } from '@angular/core';
import { NguCarouselModule } from '@ngu/carousel';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { VerificationLoaderComponent } from './shared/verification-loader/verification-loader.component';
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
		OnboardingComponent,
		AppBarLargeComponent,
		LogoComponent,
		BarComponent,
		ArrowComponent,
		CloseComponent,
		CarouselControlComponent,
		CarouselComponent,
		VerificationLoaderComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
		NguCarouselModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [ApiService],
	bootstrap: [AppComponent],
})
export class AppModule {}
