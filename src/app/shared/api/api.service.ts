import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

@Injectable()
export class ApiService {
	private readonly baseUrl = 'https://helpingagents.herokuapp.com/api';

	private cachedRegistration?: {
		name: string;
		phone: string;
	};

	constructor(private http: HttpClient) {}

	confirmPhone(): Observable<boolean> {
		return of(true).pipe(delay(800));
	}

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
			first_name: this.cachedRegistration.name,
			last_name: '',
			code,
		});
	}
}
