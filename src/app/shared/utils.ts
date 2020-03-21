import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

export function isLastSlide(carousel: NguCarousel<any>) {
	return carousel && carousel.currentSlide > carousel.slideItems;
}

export const CAROUSEL_CONFIG: NguCarouselConfig = {
	grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
	loop: false,
	touch: true,
	velocity: 0.2,
};
