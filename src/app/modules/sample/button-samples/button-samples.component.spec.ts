import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSamplesComponent } from './button-samples.component';

describe('ButtonSamplesComponent', () => {
  let component: ButtonSamplesComponent;
  let fixture: ComponentFixture<ButtonSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
