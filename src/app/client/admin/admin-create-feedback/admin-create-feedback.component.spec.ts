import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateFeedbackComponent } from './admin-create-feedback.component';

describe('AdminCreateFeedbackComponent', () => {
  let component: AdminCreateFeedbackComponent;
  let fixture: ComponentFixture<AdminCreateFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminCreateFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCreateFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
