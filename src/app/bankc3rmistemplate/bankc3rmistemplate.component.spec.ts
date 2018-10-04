import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bankc3rmistemplateComponent } from './bankc3rmistemplate.component';

describe('Bankc3rmistemplateComponent', () => {
  let component: Bankc3rmistemplateComponent;
  let fixture: ComponentFixture<Bankc3rmistemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bankc3rmistemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bankc3rmistemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
