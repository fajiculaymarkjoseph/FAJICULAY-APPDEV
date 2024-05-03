import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupCRUDPage } from './signup-crud.page';

describe('SignupCRUDPage', () => {
  let component: SignupCRUDPage;
  let fixture: ComponentFixture<SignupCRUDPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupCRUDPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
