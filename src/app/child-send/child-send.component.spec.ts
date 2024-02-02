import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSendComponent } from './child-send.component';

describe('ChildSendComponent', () => {
  let component: ChildSendComponent;
  let fixture: ComponentFixture<ChildSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildSendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
