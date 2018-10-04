import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankwiseuserrolesmatrixComponent } from './bankwiseuserrolesmatrix.component';

describe('BankwiseuserrolesmatrixComponent', () => {
  let component: BankwiseuserrolesmatrixComponent;
  let fixture: ComponentFixture<BankwiseuserrolesmatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankwiseuserrolesmatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankwiseuserrolesmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
