import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankcashbalanceComponent } from './bankcashbalance.component';

describe('BankcashbalanceComponent', () => {
  let component: BankcashbalanceComponent;
  let fixture: ComponentFixture<BankcashbalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankcashbalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankcashbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
