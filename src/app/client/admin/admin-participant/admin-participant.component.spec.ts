import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParticipantComponent } from './admin-participant.component';

describe('AdminParticipantComponent', () => {
  let component: AdminParticipantComponent;
  let fixture: ComponentFixture<AdminParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminParticipantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
