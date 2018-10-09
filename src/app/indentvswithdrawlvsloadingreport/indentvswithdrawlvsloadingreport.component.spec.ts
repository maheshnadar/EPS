import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentvswithdrawlvsloadingreportComponent } from './indentvswithdrawlvsloadingreport.component';

describe('IndentvswithdrawlvsloadingreportComponent', () => {
  let component: IndentvswithdrawlvsloadingreportComponent;
  let fixture: ComponentFixture<IndentvswithdrawlvsloadingreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndentvswithdrawlvsloadingreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentvswithdrawlvsloadingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
