import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantEnrolledCourseComponent } from './participant-enrolled-course.component';

describe('ParticipantEnrolledCourseComponent', () => {
  let component: ParticipantEnrolledCourseComponent;
  let fixture: ComponentFixture<ParticipantEnrolledCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticipantEnrolledCourseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParticipantEnrolledCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
