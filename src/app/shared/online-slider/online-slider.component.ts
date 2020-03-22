import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-online-slider',
	templateUrl: './online-slider.component.html',
	styleUrls: ['./online-slider.component.scss'],
})
export class OnlineSliderComponent implements OnInit {
	@Input() online: boolean;

	constructor() {}

	ngOnInit(): void {}
}
