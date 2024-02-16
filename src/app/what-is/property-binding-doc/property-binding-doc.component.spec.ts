import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingDocComponent } from './property-binding-doc.component';

describe('PropertyBindingDocComponent', () => {
  let component: PropertyBindingDocComponent;
  let fixture: ComponentFixture<PropertyBindingDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBindingDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBindingDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
