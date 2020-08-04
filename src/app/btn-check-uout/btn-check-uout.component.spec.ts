import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCheckUoutComponent } from './btn-check-uout.component';

describe('BtnCheckUoutComponent', () => {
  let component: BtnCheckUoutComponent;
  let fixture: ComponentFixture<BtnCheckUoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnCheckUoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCheckUoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
