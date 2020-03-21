import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarLargeComponent } from './app-bar-large.component';

describe('AppBarLargeComponent', () => {
  let component: AppBarLargeComponent;
  let fixture: ComponentFixture<AppBarLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
