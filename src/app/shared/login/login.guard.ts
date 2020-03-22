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
export class LoginGuard implements CanActivate {
	constructor(private apiService: ApiService, private router: Router) {}

	async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		const loginStatus = await this.apiService.loginStatus.pipe(first()).toPromise();

		switch (loginStatus) {
			case LoginStatus.Success: {
				return true;
			}
			case LoginStatus.Failure: {
				this.router.navigate(['/']);
				return false;
			}
			case LoginStatus.NotTried: {
				const success = await this.apiService.getProfile().toPromise();

				if (success) {
					return true;
				}

				this.router.navigate(['/']);

				return false;
			}
		}
	}
}
