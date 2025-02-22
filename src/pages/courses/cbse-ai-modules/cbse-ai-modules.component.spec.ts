import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbseAiModulesComponent } from './cbse-ai-modules.component';

describe('CbseAiModulesComponent', () => {
  let component: CbseAiModulesComponent;
  let fixture: ComponentFixture<CbseAiModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CbseAiModulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbseAiModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
