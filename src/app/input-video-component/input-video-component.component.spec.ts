import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputVideoComponentComponent } from './input-video-component.component';

describe('InputVideoComponentComponent', () => {
  let component: InputVideoComponentComponent;
  let fixture: ComponentFixture<InputVideoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputVideoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputVideoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
