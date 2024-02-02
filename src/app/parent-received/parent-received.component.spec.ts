import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentReceivedComponent } from './parent-received.component';

describe('ParentReceivedComponent', () => {
  let component: ParentReceivedComponent;
  let fixture: ComponentFixture<ParentReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentReceivedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
