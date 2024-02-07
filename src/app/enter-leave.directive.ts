import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[borderColor]',
})
export class EnterLeaveDirective {
  @Input() borderColor = '';
  @Input() textColor = '';
  constructor(private element: ElementRef) {
    this.changeTextColor('white');
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.changeBorderColor(this.borderColor || '1px solid rgb(222, 0, 45)');
    this.changeTextColor(this.textColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeBorderColor('none');
    this.changeTextColor('white');
  }

  changeBorderColor(color: string) {
    this.element.nativeElement.style.borderBottom = color;
  }
  changeTextColor(color: string) {
    this.element.nativeElement.style.color = color;
  }
}
