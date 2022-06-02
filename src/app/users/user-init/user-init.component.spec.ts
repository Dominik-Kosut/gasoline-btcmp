import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInitComponent } from './user-init.component';

describe('UserInitComponent', () => {
  let component: UserInitComponent;
  let fixture: ComponentFixture<UserInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
