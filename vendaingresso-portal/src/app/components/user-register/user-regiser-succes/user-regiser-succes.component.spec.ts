import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegiserSuccesComponent } from './user-regiser-succes.component';

describe('UserRegiserSuccesComponent', () => {
  let component: UserRegiserSuccesComponent;
  let fixture: ComponentFixture<UserRegiserSuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegiserSuccesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegiserSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
