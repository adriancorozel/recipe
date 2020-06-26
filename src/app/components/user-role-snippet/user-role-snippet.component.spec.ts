import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleSnippetComponent } from './user-role-snippet.component';

describe('UserRoleSnippetComponent', () => {
  let component: UserRoleSnippetComponent;
  let fixture: ComponentFixture<UserRoleSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRoleSnippetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoleSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
