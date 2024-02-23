import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParticipantCourseApplicationComponent } from './admin-participant-course-application.component';

describe('AdminParticipantCourseApplicationComponent', () => {
  let component: AdminParticipantCourseApplicationComponent;
  let fixture: ComponentFixture<AdminParticipantCourseApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminParticipantCourseApplicationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      AdminParticipantCourseApplicationComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
