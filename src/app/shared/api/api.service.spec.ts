import { ApiService } from './api.service';
import { TestBed } from '@angular/core/testing';

describe('ApiService', () => {
	let service: ApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ApiService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
