import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

import { Router } from '@angular/router';

@Component({
	selector: 'app-onboarding',
	templateUrl: './onboarding.component.html',
	styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent {
	@ViewChild('carousel') carousel: NguCarousel<any>;

	constructor(private router: Router) {}

	carouselConfig: NguCarouselConfig = {
		grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
		loop: false,
		touch: true,
		velocity: 0.2,
	};

	next() {
		if (this.isLastSlide) {
			this.router.navigate(['/']);
		} else {
			this.carousel.moveTo(this.carousel.currentSlide + 1);
		}
	}

	get isLastSlide() {
		if (!this.carousel) {
			return undefined;
		}

		return this.carousel.currentSlide > this.carousel.slideItems;
	}
}
