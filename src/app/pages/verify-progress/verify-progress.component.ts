import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { VerificationStatus } from 'src/app/shared/verification-loader/verification-loader.component';

@Component({
	selector: 'app-verify-progress',
	templateUrl: './verify-progress.component.html',
	styleUrls: ['./verify-progress.component.scss'],
})
export class VerifyProgressComponent implements OnInit {
	VerificationStatus = VerificationStatus;

	constructor(private location: Location) {}

	back() {
		this.location.back();
	}

	ngOnInit() {}
}
