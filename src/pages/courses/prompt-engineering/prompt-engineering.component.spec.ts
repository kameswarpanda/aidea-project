import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptEngineeringComponent } from './prompt-engineering.component';

describe('PromptEngineeringComponent', () => {
  let component: PromptEngineeringComponent;
  let fixture: ComponentFixture<PromptEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptEngineeringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
