import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImsticketsComponent } from './imstickets.component';

describe('ImsticketsComponent', () => {
  let component: ImsticketsComponent;
  let fixture: ComponentFixture<ImsticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImsticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImsticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
