import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorUpcomingCourseComponent } from './instructor-upcoming-course.component';

describe('InstructorUpcomingCourseComponent', () => {
  let component: InstructorUpcomingCourseComponent;
  let fixture: ComponentFixture<InstructorUpcomingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructorUpcomingCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorUpcomingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
