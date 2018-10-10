import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultcashComponent } from './vaultcash.component';

describe('VaultcashComponent', () => {
  let component: VaultcashComponent;
  let fixture: ComponentFixture<VaultcashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaultcashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
