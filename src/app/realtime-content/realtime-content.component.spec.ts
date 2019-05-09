import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeContentComponent } from './realtime-content.component';

describe('RealtimeContentComponent', () => {
  let component: RealtimeContentComponent;
  let fixture: ComponentFixture<RealtimeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
