import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

@Component({
	selector: 'app-verify-progress',
	templateUrl: './verify-progress.component.html',
	styleUrls: ['./verify-progress.component.scss'],
})
export class VerifyProgressComponent implements OnInit {
	constructor(private location: Location) {}

	back() {
		this.location.back();
	}

	ngOnInit(): void {}
}
