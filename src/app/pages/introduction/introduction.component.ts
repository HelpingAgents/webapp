import { AfterContentInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

import { isLastSlide } from 'src/app/shared/utils';

@Component({
	selector: 'app-introduction',
	templateUrl: './introduction.component.html',
	styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements AfterContentInit {
	@ViewChild('carousel') carousel: NguCarousel<any>;

	carouselConfig: NguCarouselConfig = {
		grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
		loop: false,
		touch: true,
		velocity: 0.2,
	};

	constructor(private cdr: ChangeDetectorRef) {}

	ngAfterContentInit(): void {
		this.cdr.detectChanges();
	}

	next() {
		if (this.isLastSlide) {
			// navigate
		} else {
			this.carousel.moveTo(this.carousel.currentSlide + 1);
		}
	}

	get isLastSlide() {
		return this.carousel && isLastSlide(this.carousel);
	}
}
