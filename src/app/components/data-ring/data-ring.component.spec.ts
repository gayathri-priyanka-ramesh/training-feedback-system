import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataRingComponent } from './data-ring.component';

describe('DataRingComponent', () => {
  let component: DataRingComponent;
  let fixture: ComponentFixture<DataRingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataRingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataRingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
