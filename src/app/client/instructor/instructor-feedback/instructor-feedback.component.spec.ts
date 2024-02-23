import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorFeedbackComponent } from './instructor-feedback.component';

describe('InstructorFeedbackComponent', () => {
  let component: InstructorFeedbackComponent;
  let fixture: ComponentFixture<InstructorFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructorFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
