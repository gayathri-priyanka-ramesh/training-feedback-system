import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackResponseTableComponent } from './feedback-response-table.component';

describe('FeedbackResponseTableComponent', () => {
  let component: FeedbackResponseTableComponent;
  let fixture: ComponentFixture<FeedbackResponseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackResponseTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackResponseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
