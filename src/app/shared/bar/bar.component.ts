import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-bar',
	templateUrl: './bar.component.html',
	styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
	constructor(private location: Location) {}

	@Input() showExit = false;

	@Output() exit = new EventEmitter();

	ngOnInit(): void {}

	back() {
		this.location.back();
	}
}
