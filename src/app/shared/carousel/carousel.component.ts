import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
	@ViewChild('carousel') carousel: NguCarousel<any>;

	@Input() templates: TemplateRef<any>[];

	CAROUSEL_CONFIG: NguCarouselConfig = {
		grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
		loop: false,
		touch: true,
		velocity: 0.2,
	};

	constructor() {}

	ngOnInit(): void {}

	public get slideNumbers() {
		return this.carousel.pointNumbers;
	}

	public get currentSlide() {
		return this.carousel.activePoint;
	}

	public get lastSlideActive() {
		return this.carousel && this.carousel.currentSlide > this.carousel.slideItems;
	}

	public get firstSlideActive() {
		return this.carousel && !this.carousel.currentSlide;
	}

	public moveTo(slide: number) {
		this.carousel.moveTo(slide);
	}

	public next() {
		this.carousel.moveTo(this.carousel.currentSlide + 1);
	}

	public previous() {
		this.carousel.moveTo(this.carousel.currentSlide - 1);
	}
}
