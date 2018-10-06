import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurabledenominationsComponent } from './configurabledenominations.component';

describe('ConfigurabledenominationsComponent', () => {
  let component: ConfigurabledenominationsComponent;
  let fixture: ComponentFixture<ConfigurabledenominationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurabledenominationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurabledenominationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
