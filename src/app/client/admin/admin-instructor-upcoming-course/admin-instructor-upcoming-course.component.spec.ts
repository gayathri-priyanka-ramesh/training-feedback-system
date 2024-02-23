import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInstructorUpcomingCourseComponent } from './admin-instructor-upcoming-course.component';

describe('AdminInstructorUpcomingCourseComponent', () => {
  let component: AdminInstructorUpcomingCourseComponent;
  let fixture: ComponentFixture<AdminInstructorUpcomingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminInstructorUpcomingCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminInstructorUpcomingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
