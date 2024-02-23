import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantCourseComponent } from './participant-course.component';

describe('ParticipantCourseComponent', () => {
  let component: ParticipantCourseComponent;
  let fixture: ComponentFixture<ParticipantCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticipantCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipantCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
