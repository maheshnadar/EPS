import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsheetComponent } from './recommendationsheet.component';

describe('RecommendationsheetComponent', () => {
  let component: RecommendationsheetComponent;
  let fixture: ComponentFixture<RecommendationsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
