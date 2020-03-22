import { BehaviorSubject, Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

export enum OnlineStatus {
	OnlineSuccess = 'OnlineSuccess',
	OnlineLoading = 'OnlineLoading',
	OfflineSuccess = 'OfflineSuccess',
	OfflineLoading = 'OfflineLoading',
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
		return this.http.post(
			`${this.baseUrl}/auth/login/request/`,
			{
				phone_number: this.cachedRegistration.phone,
			},
			{
				withCredentials: true,
			}
		);
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
		this.patchProfile({ accepting_calls: true }).subscribe(() => {
			this.onlineStatus$.next(OnlineStatus.OnlineSuccess);
		});
	}

	goOffline() {
		this.onlineStatus$.next(OnlineStatus.OfflineLoading);
		this.patchProfile({ accepting_calls: false }).subscribe(() => {
			this.onlineStatus$.next(OnlineStatus.OnlineSuccess);
		});
	}

	patchProfile(
		profile: {
			accepting_calls?: boolean;
		} = {}
	) {
		return this.http.patch(`${this.baseUrl}/auth/profile/update/`, profile, {
			withCredentials: true,
		});
	}
}
