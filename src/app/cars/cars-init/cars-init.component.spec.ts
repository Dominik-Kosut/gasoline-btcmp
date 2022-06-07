import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsInitComponent } from './cars-init.component';

describe('CarsInitComponent', () => {
  let component: CarsInitComponent;
  let fixture: ComponentFixture<CarsInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
