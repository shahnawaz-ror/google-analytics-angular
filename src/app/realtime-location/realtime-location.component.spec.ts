import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeLocationComponent } from './realtime-location.component';

describe('RealtimeLocationComponent', () => {
  let component: RealtimeLocationComponent;
  let fixture: ComponentFixture<RealtimeLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
