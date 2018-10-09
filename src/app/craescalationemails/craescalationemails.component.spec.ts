import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraescalationemailsComponent } from './craescalationemails.component';

describe('CraescalationemailsComponent', () => {
  let component: CraescalationemailsComponent;
  let fixture: ComponentFixture<CraescalationemailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraescalationemailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraescalationemailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
