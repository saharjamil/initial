import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeSampleComponent } from './badge-sample.component';

describe('BadgeSampleComponent', () => {
  let component: BadgeSampleComponent;
  let fixture: ComponentFixture<BadgeSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
