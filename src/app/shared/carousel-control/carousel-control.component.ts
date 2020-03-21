import { Component, Input } from '@angular/core';

import { CarouselComponent } from '../carousel/carousel.component';

@Component({
	selector: 'app-carousel-control',
	templateUrl: './carousel-control.component.html',
	styleUrls: ['./carousel-control.component.scss'],
})
export class CarouselControlComponent {
	@Input() carousel: CarouselComponent;
}
