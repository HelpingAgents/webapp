import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Location } from '@angular/common';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
	selector: 'app-bar',
	templateUrl: './bar.component.html',
	styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {
	settingsOpened = false
	constructor(private location: Location,
		private apiService: ApiService,
		) {}

	@Input() showExit = false;
	@Input() showLogo = false;
	@Input() showSettings = false;

	@Output() exit = new EventEmitter();

	ngOnInit(): void {	}

	back() {
		this.location.back();
	}
	logout() {
		this.apiService.logout().subscribe();
	}
}
