import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyvaultingreportComponent } from './emergencyvaultingreport.component';

describe('EmergencyvaultingreportComponent', () => {
  let component: EmergencyvaultingreportComponent;
  let fixture: ComponentFixture<EmergencyvaultingreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyvaultingreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyvaultingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
