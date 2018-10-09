import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyphercodeComponent } from './cyphercode.component';

describe('CyphercodeComponent', () => {
  let component: CyphercodeComponent;
  let fixture: ComponentFixture<CyphercodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyphercodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyphercodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
