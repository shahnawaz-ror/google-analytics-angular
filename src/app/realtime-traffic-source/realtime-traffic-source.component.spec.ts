import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeTrafficSourceComponent } from './realtime-traffic-source.component';

describe('RealtimeTrafficSourceComponent', () => {
  let component: RealtimeTrafficSourceComponent;
  let fixture: ComponentFixture<RealtimeTrafficSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeTrafficSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeTrafficSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
