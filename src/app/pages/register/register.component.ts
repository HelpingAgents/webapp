import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ApiService } from 'src/app/shared/api/api.service';
import { Router } from '@angular/router';

const PHONE_NUMBER_PATTERN = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	form = this.formBuilder.group({
		name: ['', [Validators.required]],
		phone: ['', [Validators.required, Validators.pattern(PHONE_NUMBER_PATTERN)]],
	});

	constructor(
		private formBuilder: FormBuilder,
		private apiService: ApiService,
		private router: Router
	) {}

	ngOnInit(): void {}

	loadCachedRegistration() {
		const registration = this.apiService.getCachedRegistration();

		if (!registration) {
			return;
		}

		this.form.setValue({
			name: registration.name,
			phone: registration.phone,
		});
	}

	displayError(controlName: string, error: string) {
		const control = this.form.controls[controlName];
		return (control.dirty || control.touched) && this.form.controls[controlName].hasError(error);
	}

	verify() {
		this.apiService.cacheRegistration(
			this.form.controls.name.value,
			this.form.controls.phone.value
		);

		this.apiService.requestLogin().subscribe();

		this.router.navigate(['verify-progress']);
	}
}
