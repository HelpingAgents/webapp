import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselControlComponent } from './carousel-control.component';

describe('CarouselControlComponent', () => {
  let component: CarouselControlComponent;
  let fixture: ComponentFixture<CarouselControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
