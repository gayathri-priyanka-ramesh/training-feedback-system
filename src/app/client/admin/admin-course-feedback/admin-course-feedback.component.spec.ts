import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCourseFeedbackComponent } from './admin-course-feedback.component';

describe('AdminCourseFeedbackComponent', () => {
  let component: AdminCourseFeedbackComponent;
  let fixture: ComponentFixture<AdminCourseFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCourseFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCourseFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
