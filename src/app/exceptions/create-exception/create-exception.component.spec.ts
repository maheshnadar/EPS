import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExceptionComponent } from './create-exception.component';

describe('CreateExceptionComponent', () => {
  let component: CreateExceptionComponent;
  let fixture: ComponentFixture<CreateExceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
