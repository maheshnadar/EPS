import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifyatmsComponent } from './qualifyatms.component';

describe('QualifyatmsComponent', () => {
  let component: QualifyatmsComponent;
  let fixture: ComponentFixture<QualifyatmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualifyatmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualifyatmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
