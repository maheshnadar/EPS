import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexceptionComponent } from './viewexception.component';

describe('ViewexceptionComponent', () => {
  let component: ViewexceptionComponent;
  let fixture: ComponentFixture<ViewexceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewexceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
