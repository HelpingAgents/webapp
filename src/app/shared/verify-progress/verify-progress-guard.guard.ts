import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ApiService } from '../api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class VerifyProgressGuard implements CanActivate {
	constructor(private apiService: ApiService, private router: Router) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean | Observable<boolean> {
		const isCached = !!this.apiService.getCachedRegistration();
		const loggedIn = !!this.apiService.profile$.value;

		if (isCached) {
			return true;
		}

		if (loggedIn) {
			this.router.navigate(['/main']);
			return false;
		}

		return this.apiService
			.getProfile()
			.pipe(
				map(() => true),
				catchError(() => of(false))
			)
			.pipe(
				tap(hasProfile => {
					if (hasProfile) {
						this.router.navigate(['/main']);
					} else {
						this.router.navigate(['/']);
					}
				}),
				map(() => false)
			);
	}
}
