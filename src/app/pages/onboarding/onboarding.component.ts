import {
	AfterContentInit,
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	ElementRef,
	OnInit,
	ViewChild,
} from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

import { Router } from '@angular/router';

@Component({
	selector: 'app-onboarding',
	templateUrl: './onboarding.component.html',
	styleUrls: ['./onboarding.component.scss'],
})
export class OnboardingComponent implements AfterContentInit {
	constructor(private cdr: ChangeDetectorRef) {}

	ngAfterContentInit() {
		this.cdr.detectChanges();
	}
}
