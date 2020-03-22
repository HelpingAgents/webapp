import { NotLoggedInGuard } from './not-logged-in.guard';
import { TestBed } from '@angular/core/testing';

describe('NotLoggedInGuard', () => {
	let guard: NotLoggedInGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		guard = TestBed.inject(NotLoggedInGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
