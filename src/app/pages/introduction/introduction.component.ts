import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { CAROUSEL_CONFIG, isLastSlide } from 'src/app/shared/utils';

import { NguCarousel } from '@ngu/carousel';

@Component({
	selector: 'app-introduction',
	templateUrl: './introduction.component.html',
	styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements AfterViewInit {
	@ViewChild('carousel') carousel: NguCarousel<any>;

	CAROUSEL_CONFIG = CAROUSEL_CONFIG;

	constructor(private cdr: ChangeDetectorRef) {}

	ngAfterViewInit() {
		this.cdr.detectChanges();
	}

	get isLastSlide() {
		return isLastSlide(this.carousel);
	}
}
