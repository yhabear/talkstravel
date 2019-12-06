import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionComponent } from './tradition.component';

describe('TraditionComponent', () => {
  let component: TraditionComponent;
  let fixture: ComponentFixture<TraditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
