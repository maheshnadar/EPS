import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmdowntimereportComponent } from './atmdowntimereport.component';

describe('AtmdowntimereportComponent', () => {
  let component: AtmdowntimereportComponent;
  let fixture: ComponentFixture<AtmdowntimereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmdowntimereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmdowntimereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
