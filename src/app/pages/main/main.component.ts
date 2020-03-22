import { ApiService, OnlineStatus } from 'src/app/shared/api/api.service';
import { BehaviorSubject, ReplaySubject, combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { first, map } from 'rxjs/operators';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
	OnlineStatus = OnlineStatus;

	loading$ = new BehaviorSubject(true);
	profile$ = this.apiService.profile$;

	onlineStatus$ = combineLatest([this.profile$, this.loading$]).pipe(
		map(([{ accepting_calls }, loading]) => {
			if (accepting_calls && loading) {
				return OnlineStatus.OfflineLoading;
			}

			if (!accepting_calls && loading) {
				return OnlineStatus.OnlineLoading;
			}

			if (accepting_calls) {
				return OnlineStatus.OnlineSuccess;
			}

			return OnlineStatus.OfflineSuccess;
		})
	);

	statusBoxClasses$ = this.onlineStatus$.pipe(
		map(status => {
			switch (status) {
				case OnlineStatus.OnlineSuccess:
				case OnlineStatus.OfflineLoading: {
					return ['text-white', 'bg-gradient-success'];
				}
				case OnlineStatus.OfflineSuccess:
				case OnlineStatus.OnlineLoading: {
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

	ngOnInit() {
		this.apiService.getProfile();
	}

	async toggleOnline() {
		const onlineStatus = await this.onlineStatus$.pipe(first()).toPromise();

		if (onlineStatus === OnlineStatus.OnlineSuccess) {
			this.loading$.next(true);
			this.apiService.goOffline().subscribe(() => this.loading$.next(false));
		}

		if (onlineStatus === OnlineStatus.OfflineSuccess) {
			this.loading$.next(true);
			this.apiService.goOnline().subscribe(() => this.loading$.next(false));
		}
	}
}
