import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInitComponent } from './car-init.component';

describe('CarInitComponent', () => {
  let component: CarInitComponent;
  let fixture: ComponentFixture<CarInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
