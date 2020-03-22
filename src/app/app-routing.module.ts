import { RouterModule, Routes } from '@angular/router';

import { IntroductionComponent } from './pages/introduction/introduction.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginGuard } from './shared/login/login.guard';
import { MainComponent } from './pages/main/main.component';
import { NgModule } from '@angular/core';
import { NotLoggedInGuard } from './shared/not-logged-in/not-logged-in.guard';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { RegisterComponent } from './pages/register/register.component';
import { VerifyProgressComponent } from './pages/verify-progress/verify-progress.component';
import { VerifyProgressGuard } from './shared/verify-progress/verify-progress-guard.guard';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: LandingComponent,
		canActivate: [NotLoggedInGuard],
	},
	{
		path: 'introduction',
		component: IntroductionComponent,
		canActivate: [NotLoggedInGuard],
	},
	{
		path: 'register',
		component: RegisterComponent,
		canActivate: [NotLoggedInGuard],
	},
	{
		path: 'verify-progress',
		component: VerifyProgressComponent,
		canActivate: [NotLoggedInGuard, VerifyProgressGuard],
	},
	{
		path: 'onboarding',
		component: OnboardingComponent,
		canActivate: [LoginGuard],
	},
	{
		path: 'main',
		component: MainComponent,
		canActivate: [LoginGuard],
	},
	{
		path: '**',
		redirectTo: '/',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
