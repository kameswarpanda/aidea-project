import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiRoboticsComponent } from './ai-robotics.component';

describe('AiRoboticsComponent', () => {
  let component: AiRoboticsComponent;
  let fixture: ComponentFixture<AiRoboticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiRoboticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiRoboticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
