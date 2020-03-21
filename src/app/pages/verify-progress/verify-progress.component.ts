import { Component, OnInit } from '@angular/core';
import { catchError, delay, tap } from 'rxjs/operators';

import { ApiService } from 'src/app/shared/api/api.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { VerificationStatus } from 'src/app/shared/verification-loader/verification-loader.component';

@Component({
	selector: 'app-verify-progress',
	templateUrl: './verify-progress.component.html',
	styleUrls: ['./verify-progress.component.scss'],
})
export class VerifyProgressComponent implements OnInit {
	VerificationStatus = VerificationStatus;
	status = VerificationStatus.LOADING;

	constructor(private location: Location, private apiService: ApiService, private router: Router) {}

	back() {
		this.location.back();
	}

	ngOnInit() {
		this.confirmPhone();
	}

	confirmPhone() {
		this.apiService
			.confirmPhone()
			.pipe(
				tap(() => (this.status = VerificationStatus.SUCCESS)),
				delay(450)
			)
			.subscribe(
				() => this.router.navigate(['onboarding']),
				() => (this.status = VerificationStatus.ERROR)
			);
	}
}
