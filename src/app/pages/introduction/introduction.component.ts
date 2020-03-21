import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';

@Component({
	selector: 'app-introduction',
	templateUrl: './introduction.component.html',
	styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements AfterViewInit {
	constructor(private cdr: ChangeDetectorRef) {}

	ngAfterViewInit() {
		this.cdr.detectChanges();
	}
}
