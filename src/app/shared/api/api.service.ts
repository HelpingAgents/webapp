import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

@Injectable()
export class ApiService {
	readonly baseUrl = '';

	constructor() {}

	confirmPhone(): Observable<boolean> {
		return of(true).pipe(delay(800));
	}
}
