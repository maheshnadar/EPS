import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentsrevisionsComponent } from './indentsrevisions.component';

describe('IndentsrevisionsComponent', () => {
  let component: IndentsrevisionsComponent;
  let fixture: ComponentFixture<IndentsrevisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentsrevisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentsrevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
