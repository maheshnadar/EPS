import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyloadingreportComponent } from './dailyloadingreport.component';

describe('DailyloadingreportComponent', () => {
  let component: DailyloadingreportComponent;
  let fixture: ComponentFixture<DailyloadingreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyloadingreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyloadingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
