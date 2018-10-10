import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitindentrevisionsComponent } from './submitindentrevisions.component';

describe('SubmitindentrevisionsComponent', () => {
  let component: SubmitindentrevisionsComponent;
  let fixture: ComponentFixture<SubmitindentrevisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitindentrevisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitindentrevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
