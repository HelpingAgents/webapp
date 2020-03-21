import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {}

	displayError(controlName: string, error: string) {
		const control = this.form.controls[controlName];
		return (control.dirty || control.touched) && this.form.controls[controlName].hasError(error);
	}
}
