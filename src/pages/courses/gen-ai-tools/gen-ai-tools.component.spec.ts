import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenAiToolsComponent } from './gen-ai-tools.component';

describe('GenAiToolsComponent', () => {
  let component: GenAiToolsComponent;
  let fixture: ComponentFixture<GenAiToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenAiToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenAiToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
