import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackpanelComponent } from './stackpanel.component';

describe('StackpanelComponent', () => {
  let component: StackpanelComponent;
  let fixture: ComponentFixture<StackpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
