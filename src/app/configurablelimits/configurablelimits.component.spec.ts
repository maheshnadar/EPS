import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurablelimitsComponent } from './configurablelimits.component';

describe('ConfigurablelimitsComponent', () => {
  let component: ConfigurablelimitsComponent;
  let fixture: ComponentFixture<ConfigurablelimitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurablelimitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurablelimitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
