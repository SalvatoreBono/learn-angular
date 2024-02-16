import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterpolationDocComponent } from './string-interpolation-doc.component';

describe('StringInterpolationDocComponent', () => {
  let component: StringInterpolationDocComponent;
  let fixture: ComponentFixture<StringInterpolationDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringInterpolationDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringInterpolationDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
