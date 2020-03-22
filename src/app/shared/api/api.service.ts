import { BehaviorSubject, Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

export enum OnlineStatus {
	OnlineSuccess,
	OnlineLoading,
	OfflineSuccess,
	OfflineLoading,
}

@Injectable()
export class ApiService {
	private readonly baseUrl = 'https://helpingagents.herokuapp.com/api';

	private cachedRegistration?: {
		name: string;
		phone: string;
	};

	public onlineStatus$ = new BehaviorSubject(OnlineStatus.OfflineSuccess);

	constructor(private http: HttpClient) {}

	cacheRegistration(name: string, phone: string) {
		this.cachedRegistration = {
			name,
			phone,
		};
	}

	requestLogin() {
		return this.http.post(`${this.baseUrl}/auth/login/request/`, {
			phone_number: this.cachedRegistration.phone,
		});
	}

	login(code: string) {
		return this.http.post(`${this.baseUrl}/auth/login/`, {
			phone_number: this.cachedRegistration.phone,
			name: this.cachedRegistration.name,
			code,
		});
	}

	goOnline() {
		this.onlineStatus$.next(OnlineStatus.OnlineLoading);

		of(true)
			.pipe(delay(700))
			.subscribe(() => {
				this.onlineStatus$.next(OnlineStatus.OnlineSuccess);
			});
	}

	goOffline() {
		this.onlineStatus$.next(OnlineStatus.OfflineLoading);

		of(true)
			.pipe(delay(700))
			.subscribe(() => {
				this.onlineStatus$.next(OnlineStatus.OfflineSuccess);
			});
	}
}
