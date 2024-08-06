import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditTableComponent } from './inline-edit-table.component';

describe('InlineEditTableComponent', () => {
  let component: InlineEditTableComponent;
  let fixture: ComponentFixture<InlineEditTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineEditTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlineEditTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
