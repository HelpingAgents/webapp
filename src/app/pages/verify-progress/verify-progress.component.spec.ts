import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { VerifyProgressComponent } from './verify-progress.component';

describe('VerifyProgressComponent', () => {
	let component: VerifyProgressComponent;
	let fixture: ComponentFixture<VerifyProgressComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [VerifyProgressComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(VerifyProgressComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
