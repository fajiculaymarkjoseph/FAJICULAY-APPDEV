import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NpagePage } from './npage.page';

describe('NpagePage', () => {
  let component: NpagePage;
  let fixture: ComponentFixture<NpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
