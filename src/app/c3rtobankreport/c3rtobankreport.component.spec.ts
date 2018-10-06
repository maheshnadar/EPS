import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C3rtobankreportComponent } from './c3rtobankreport.component';

describe('C3rtobankreportComponent', () => {
  let component: C3rtobankreportComponent;
  let fixture: ComponentFixture<C3rtobankreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C3rtobankreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C3rtobankreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
