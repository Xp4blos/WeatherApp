import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlopComponent } from './blop.component';

describe('BlopComponent', () => {
  let component: BlopComponent;
  let fixture: ComponentFixture<BlopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlopComponent]
    });
    fixture = TestBed.createComponent(BlopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
