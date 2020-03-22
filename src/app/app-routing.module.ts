import { RouterModule, Routes } from '@angular/router';

import { IntroductionComponent } from './pages/introduction/introduction.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MainComponent } from './pages/main/main.component';
import { NgModule } from '@angular/core';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { RegisterComponent } from './pages/register/register.component';
import { VerifyProgressComponent } from './pages/verify-progress/verify-progress.component';
import { VerifyProgressGuard } from './shared/verify-progress/verify-progress-guard.guard';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: LandingComponent,
	},
	{
		path: 'introduction',
		component: IntroductionComponent,
	},
	{
		path: 'register',
		component: RegisterComponent,
	},
	{
		path: 'verify-progress',
		component: VerifyProgressComponent,
		canActivate: [VerifyProgressGuard],
	},
	{
		path: 'onboarding',
		component: OnboardingComponent,
	},
	{
		path: 'main',
		component: MainComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
