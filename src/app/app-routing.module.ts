import { RouterModule, Routes } from '@angular/router';

import { IntroductionComponent } from './pages/introduction/introduction.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './pages/register/register.component';
import { VerifyAgainComponent } from './pages/verify-again/verify-again.component';
import { VerifyProgressComponent } from './pages/verify-progress/verify-progress.component';

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
		path: 'verify-again',
		component: VerifyAgainComponent,
	},
	{
		path: 'verify-progress',
		component: VerifyProgressComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
