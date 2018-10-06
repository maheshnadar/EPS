import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CassetteconfigsComponent } from './cassetteconfigs.component';

describe('CassetteconfigsComponent', () => {
  let component: CassetteconfigsComponent;
  let fixture: ComponentFixture<CassetteconfigsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CassetteconfigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CassetteconfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
