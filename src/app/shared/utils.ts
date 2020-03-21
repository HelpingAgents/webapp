import { NguCarousel } from '@ngu/carousel';

export function isLastSlide(carousel: NguCarousel<any>) {
	return carousel.currentSlide > carousel.slideItems;
}
