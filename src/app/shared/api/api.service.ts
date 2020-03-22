import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export enum OnlineStatus {
	OnlineSuccess = 'OnlineSuccess',
	OnlineLoading = 'OnlineLoading',
	OfflineSuccess = 'OfflineSuccess',
	OfflineLoading = 'OfflineLoading',
}

export interface Profile {
	name: string;
	accepting_calls: boolean;
}

const options = {
	withCredentials: true,
};

@Injectable()
export class ApiService {
	private readonly baseUrl = 'https://helpingagents.herokuapp.com/api';

	private cachedRegistration?: {
		name: string;
		phone: string;
	};

	public profile$ = new BehaviorSubject<Profile>(undefined);

	constructor(private http: HttpClient) {
		this.getProfile().subscribe();
	}

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
			options
		);
	}

	login(code: string) {
		return this.http.post(
			`${this.baseUrl}/auth/login/`,
			{
				phone_number: this.cachedRegistration.phone,
				name: this.cachedRegistration.name,
				code,
			},
			options
		);
	}

	goOnline() {
		return this.patchProfile({ accepting_calls: true });
	}

	goOffline() {
		return this.patchProfile({ accepting_calls: false });
	}

	patchProfile(
		profile: {
			accepting_calls?: boolean;
		} = {}
	) {
		return this.http
			.patch<Profile>(`${this.baseUrl}/auth/profile/update/`, profile, options)
			.pipe(tap(responseProfile => this.profile$.next(responseProfile)));
	}

	getProfile() {
		return this.http
			.get<Profile>(`${this.baseUrl}/auth/profile/info/`, options)
			.pipe(tap(responseProfile => this.profile$.next(responseProfile)));
	}

	getCachedRegistration() {
		return this.cachedRegistration;
	}
}
