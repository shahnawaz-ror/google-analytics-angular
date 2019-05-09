import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeConversionComponent } from './realtime-conversion.component';

describe('RealtimeConversionComponent', () => {
  let component: RealtimeConversionComponent;
  let fixture: ComponentFixture<RealtimeConversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeConversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
