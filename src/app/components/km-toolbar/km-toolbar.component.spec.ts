import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmToolbarComponent } from './km-toolbar.component';

describe('KmToolbarComponent', () => {
  let component: KmToolbarComponent;
  let fixture: ComponentFixture<KmToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KmToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KmToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
