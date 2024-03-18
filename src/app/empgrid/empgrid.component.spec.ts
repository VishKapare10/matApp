import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpgridComponent } from './empgrid.component';

describe('EmpgridComponent', () => {
  let component: EmpgridComponent;
  let fixture: ComponentFixture<EmpgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpgridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
