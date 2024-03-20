import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyUserPage } from './my-user.page';

describe('MyUserPage', () => {
  let component: MyUserPage;
  let fixture: ComponentFixture<MyUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
