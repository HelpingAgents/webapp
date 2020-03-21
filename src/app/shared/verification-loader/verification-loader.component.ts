import { Component, Input, OnInit } from '@angular/core';

export enum VerificationStatus {
	SUCCESS,
	LOADING,
	ERROR,
}

@Component({
	selector: 'app-verification-loader',
	templateUrl: './verification-loader.component.html',
	styleUrls: ['./verification-loader.component.scss'],
})
export class VerificationLoaderComponent implements OnInit {
	@Input() status = VerificationStatus.LOADING;
	VerificationStatus = VerificationStatus;

	constructor() {}

	ngOnInit(): void {}
}
