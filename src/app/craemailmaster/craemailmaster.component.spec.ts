import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraemailmasterComponent } from './craemailmaster.component';

describe('CraemailmasterComponent', () => {
  let component: CraemailmasterComponent;
  let fixture: ComponentFixture<CraemailmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraemailmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraemailmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
