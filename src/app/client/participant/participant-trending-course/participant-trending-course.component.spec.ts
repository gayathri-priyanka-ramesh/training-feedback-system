import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantTrendingCourseComponent } from './participant-trending-course.component';

describe('ParticipantTrendingCourseComponent', () => {
  let component: ParticipantTrendingCourseComponent;
  let fixture: ComponentFixture<ParticipantTrendingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticipantTrendingCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipantTrendingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
