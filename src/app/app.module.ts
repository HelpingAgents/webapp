import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LandingComponent } from './pages/landing/landing.component';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [AppComponent, LandingComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
