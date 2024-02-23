import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantFeedbackSubmitComponent } from './participant-feedback-submit.component';

describe('ParticipantFeedbackSubmitComponent', () => {
  let component: ParticipantFeedbackSubmitComponent;
  let fixture: ComponentFixture<ParticipantFeedbackSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticipantFeedbackSubmitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipantFeedbackSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
