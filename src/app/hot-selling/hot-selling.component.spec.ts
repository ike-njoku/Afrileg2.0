import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSellingComponent } from './hot-selling.component';

describe('HotSellingComponent', () => {
  let component: HotSellingComponent;
  let fixture: ComponentFixture<HotSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
