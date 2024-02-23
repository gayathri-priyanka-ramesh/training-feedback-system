import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFeedbackFormPreviewComponent } from './admin-feedback-form-preview.component';

describe('AdminFeedbackFormPreviewComponent', () => {
  let component: AdminFeedbackFormPreviewComponent;
  let fixture: ComponentFixture<AdminFeedbackFormPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminFeedbackFormPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminFeedbackFormPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
