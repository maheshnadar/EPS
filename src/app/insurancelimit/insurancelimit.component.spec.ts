import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancelimitComponent } from './insurancelimit.component';

describe('InsurancelimitComponent', () => {
  let component: InsurancelimitComponent;
  let fixture: ComponentFixture<InsurancelimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsurancelimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancelimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
