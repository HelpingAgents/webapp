import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

	form = this.formBuilder.array([
		['', [Validators.required, Validators.pattern(/^[0-9]$/)]],
		['', [Validators.required, Validators.pattern(/^[0-9]$/)]],
		['', [Validators.required, Validators.pattern(/^[0-9]$/)]],
		['', [Validators.required, Validators.pattern(/^[0-9]$/)]],
		['', [Validators.required, Validators.pattern(/^[0-9]$/)]],
		['', [Validators.required, Validators.pattern(/^[0-9]$/)]],
	]);

	constructor(
		private location: Location,
		private apiService: ApiService,
		private router: Router,
		private formBuilder: FormBuilder
	) {}

	back() {
		this.location.back();
	}

	ngOnInit() {}

	login() {
		const code = this.form.controls.map(control => control.value).join('');

		this.apiService.login(code).subscribe(
			() => (this.status = VerificationStatus.SUCCESS),
			() => (this.status = VerificationStatus.ERROR)
		);
	}

	focusNext(nativeElement: any) {
		const next = nativeElement.nextElementSibling;

		if (!next) {
			nativeElement.blur();
			this.login();
			return;
		}

		next.focus();
	}

	inputFocused(index: number) {
		this.form.controls[index].setValue('');
	}
}
