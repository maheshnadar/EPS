import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankcashlimitComponent } from './bankcashlimit.component';

describe('BankcashlimitComponent', () => {
  let component: BankcashlimitComponent;
  let fixture: ComponentFixture<BankcashlimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankcashlimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankcashlimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
