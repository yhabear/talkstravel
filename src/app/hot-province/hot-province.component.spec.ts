import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotProvinceComponent } from './hot-province.component';

describe('HotProvinceComponent', () => {
  let component: HotProvinceComponent;
  let fixture: ComponentFixture<HotProvinceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotProvinceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotProvinceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
