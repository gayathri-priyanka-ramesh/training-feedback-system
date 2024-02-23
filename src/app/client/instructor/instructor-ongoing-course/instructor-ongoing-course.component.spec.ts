import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorOngoingCourseComponent } from './instructor-ongoing-course.component';

describe('InstructorOngoingCourseComponent', () => {
  let component: InstructorOngoingCourseComponent;
  let fixture: ComponentFixture<InstructorOngoingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructorOngoingCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstructorOngoingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
