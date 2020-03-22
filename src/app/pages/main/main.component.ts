import { ApiService, OnlineStatus } from 'src/app/shared/api/api.service';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
	OnlineStatus = OnlineStatus;
	onlineStatus$ = this.apiService.onlineStatus$;

	statusBoxClasses$ = this.onlineStatus$.pipe(
		map(status => {
			switch (status) {
				case OnlineStatus.OnlineSuccess:
				case OnlineStatus.OnlineLoading: {
					return ['text-white', 'bg-gradient-success'];
				}
				case OnlineStatus.OfflineLoading:
				case OnlineStatus.OfflineSuccess: {
					return ['text-somegray', 'bg-gradient-gray'];
				}
			}
		})
	);

	pointClasses$ = this.onlineStatus$.pipe(
		map(status => {
			switch (status) {
				case OnlineStatus.OnlineSuccess:
				case OnlineStatus.OnlineLoading: {
					return ['bg-success'];
				}
				case OnlineStatus.OfflineLoading:
				case OnlineStatus.OfflineSuccess: {
					return ['bg-mediumgray'];
				}
			}
		})
	);

	constructor(private apiService: ApiService) {}

	ngOnInit() {}

	toggleOnline() {
		if (this.onlineStatus$.value === OnlineStatus.OnlineSuccess) {
			this.apiService.goOffline();
		}

		if (this.onlineStatus$.value === OnlineStatus.OfflineSuccess) {
			this.apiService.goOnline();
		}
	}
}
