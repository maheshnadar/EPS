import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestartstopindentsComponent } from './restartstopindents.component';

describe('RestartstopindentsComponent', () => {
  let component: RestartstopindentsComponent;
  let fixture: ComponentFixture<RestartstopindentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestartstopindentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestartstopindentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
