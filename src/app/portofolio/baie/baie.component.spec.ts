import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaieComponent } from './baie.component';

describe('BaieComponent', () => {
  let component: BaieComponent;
  let fixture: ComponentFixture<BaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
