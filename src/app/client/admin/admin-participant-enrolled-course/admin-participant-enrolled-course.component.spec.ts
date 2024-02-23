import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParticipantEnrolledCourseComponent } from './admin-participant-enrolled-course.component';

describe('AdminParticipantEnrolledCourseComponent', () => {
  let component: AdminParticipantEnrolledCourseComponent;
  let fixture: ComponentFixture<AdminParticipantEnrolledCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminParticipantEnrolledCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminParticipantEnrolledCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
