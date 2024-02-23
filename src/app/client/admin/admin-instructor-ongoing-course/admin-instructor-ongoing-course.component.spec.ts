import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInstructorOngoingCourseComponent } from './admin-instructor-ongoing-course.component';

describe('AdminInstructorOngoingCourseComponent', () => {
  let component: AdminInstructorOngoingCourseComponent;
  let fixture: ComponentFixture<AdminInstructorOngoingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminInstructorOngoingCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminInstructorOngoingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
