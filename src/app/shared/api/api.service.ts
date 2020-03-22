import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';

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

export enum LoginStatus {
	Success = 'Success',
	NotTried = 'NotTried',
	Failure = 'Failure',
}

const options = {
	withCredentials: true,
};

@Injectable()
export class ApiService {
	private readonly baseUrl = '/api';

	private cachedRegistration?: {
		name: string;
		phone: string;
	};

	public profile$ = new BehaviorSubject<Profile>(undefined);

	private triedLogin$ = new BehaviorSubject<boolean>(false);

	public loginStatus = combineLatest([this.profile$, this.triedLogin$]).pipe(
		map(([profile, tried]) => {
			if (profile) {
				return LoginStatus.Success;
			}

			if (tried) {
				return LoginStatus.Failure;
			}

			return LoginStatus.NotTried;
		})
	);

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
		return this.http
			.post(
				`${this.baseUrl}/auth/login/`,
				{
					phone_number: this.cachedRegistration.phone,
					name: this.cachedRegistration.name,
					code,
				},
				options
			)
			.pipe(tap(() => this.triedLogin$.next(false)));
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
		return this.http.get<Profile>(`${this.baseUrl}/auth/profile/info/`, options).pipe(
			tap(responseProfile => this.profile$.next(responseProfile)),
			tap(() => this.triedLogin$.next(true)),
			catchError(() => {
				this.triedLogin$.next(true);
				return of(undefined);
			})
		);
	}

	getCachedRegistration() {
		return this.cachedRegistration;
	}
}
