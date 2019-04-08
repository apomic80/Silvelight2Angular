import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasecontrolComponent } from './basecontrol.component';

describe('BasecontrolComponent', () => {
  let component: BasecontrolComponent;
  let fixture: ComponentFixture<BasecontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasecontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasecontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
