import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCallbackSignoutComponent } from './auth-callback-signout.component';

describe('AuthCallbackSignoutComponent', () => {
  let component: AuthCallbackSignoutComponent;
  let fixture: ComponentFixture<AuthCallbackSignoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthCallbackSignoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCallbackSignoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
