import {
	AfterContentInit,
	ChangeDetectorRef,
	Component,
	Input,
	OnChanges,
	OnInit,
} from '@angular/core';

import { NguCarousel } from '@ngu/carousel';
import { isLastSlide } from '../utils';

@Component({
	selector: 'app-carousel-control',
	templateUrl: './carousel-control.component.html',
	styleUrls: ['./carousel-control.component.scss'],
})
export class CarouselControlComponent {
	@Input() carousel: NguCarousel<any>;

	next() {
		this.carousel.moveTo(this.carousel.currentSlide + 1);
	}

	previous() {
		this.carousel.moveTo(this.carousel.currentSlide - 1);
	}

	get isLastSlide() {
		return this.carousel && isLastSlide(this.carousel);
	}

	get isFirstSlide() {
		return this.carousel && !this.carousel.currentSlide;
	}
}
