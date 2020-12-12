import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmCardComponent } from './km-card.component';

describe('KmCardComponent', () => {
  let component: KmCardComponent;
  let fixture: ComponentFixture<KmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KmCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
