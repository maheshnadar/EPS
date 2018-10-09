import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CravaultmasterComponent } from './cravaultmaster.component';

describe('CravaultmasterComponent', () => {
  let component: CravaultmasterComponent;
  let fixture: ComponentFixture<CravaultmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CravaultmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CravaultmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
