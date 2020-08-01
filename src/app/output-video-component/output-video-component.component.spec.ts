import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputVideoComponentComponent } from './output-video-component.component';

describe('OutputVideoComponentComponent', () => {
  let component: OutputVideoComponentComponent;
  let fixture: ComponentFixture<OutputVideoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputVideoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputVideoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
