import { TestBed } from '@angular/core/testing';
import { VerifyProgressGuard } from './verify-progress-guard.guard';

describe('VerifyProgressGuardGuard', () => {
	let guard: VerifyProgressGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		guard = TestBed.inject(VerifyProgressGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
