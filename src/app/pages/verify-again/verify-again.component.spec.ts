import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyAgainComponent } from './verify-again.component';

describe('VerifyAgainComponent', () => {
  let component: VerifyAgainComponent;
  let fixture: ComponentFixture<VerifyAgainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyAgainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
