import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantAppliedCourseComponent } from './participant-applied-course.component';

describe('ParticipantAppliedCourseComponent', () => {
  let component: ParticipantAppliedCourseComponent;
  let fixture: ComponentFixture<ParticipantAppliedCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticipantAppliedCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipantAppliedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
