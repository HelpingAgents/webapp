import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { NguCarouselConfig } from '@ngu/carousel';
import { Router } from '@angular/router';

@Component({
	selector: 'app-onboarding',
	templateUrl: './onboarding.component.html',
	styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent {
	constructor(private router: Router) {}

	carouselConfig: NguCarouselConfig = {
		grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
		loop: false,
		touch: true,
		velocity: 0.2,
	};

	next() {
		this.router.navigate(['onboarding'], { fragment: 'step1' });
	}
}
