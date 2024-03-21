import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MattbComponent } from './mattb.component';

describe('MattbComponent', () => {
  let component: MattbComponent;
  let fixture: ComponentFixture<MattbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MattbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MattbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
