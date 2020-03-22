import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from '@angular/router';
import { ApiService, LoginStatus } from '../api/api.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class NotLoggedInGuard implements CanActivate {
	constructor(private apiService: ApiService, private router: Router) {}

	async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		const loginStatus = await this.apiService.loginStatus.pipe(first()).toPromise();

		console.log(loginStatus);

		switch (loginStatus) {
			case LoginStatus.Success: {
				this.router.navigate(['/main']);
				return false;
			}
			case LoginStatus.Failure: {
				return true;
			}
			case LoginStatus.NotTried: {
				const success = await this.apiService.getProfile().toPromise();

				if (success) {
					this.router.navigate(['/main']);
					return false;
				}

				return true;
			}
		}
	}
}
