import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealLifeProjectComponent } from './real-life-project.component';

describe('RealLifeProjectComponent', () => {
  let component: RealLifeProjectComponent;
  let fixture: ComponentFixture<RealLifeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealLifeProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealLifeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
