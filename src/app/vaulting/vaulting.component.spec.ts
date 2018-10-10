import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaultingComponent } from './vaulting.component';

describe('VaultingComponent', () => {
  let component: VaultingComponent;
  let fixture: ComponentFixture<VaultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
