import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLifecycleDocComponent } from './component-lifecycle-doc.component';

describe('ComponentLifecycleDocComponent', () => {
  let component: ComponentLifecycleDocComponent;
  let fixture: ComponentFixture<ComponentLifecycleDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLifecycleDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLifecycleDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
