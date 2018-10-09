import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalvsrevisedindentsreportComponent } from './originalvsrevisedindentsreport.component';

describe('OriginalvsrevisedindentsreportComponent', () => {
  let component: OriginalvsrevisedindentsreportComponent;
  let fixture: ComponentFixture<OriginalvsrevisedindentsreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginalvsrevisedindentsreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginalvsrevisedindentsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
