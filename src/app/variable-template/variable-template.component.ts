import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-variable-template',
  templateUrl: './variable-template.component.html',
  styleUrls: ['./variable-template.component.css'],
})
export class VariableTemplateComponent implements OnInit, AfterViewInit {
  @ViewChild('inputValue') inputValue!: ElementRef<HTMLInputElement>;
  constructor() {}
  divTrue = false;
  divFalse = false;
  name = '';
  ngOnInit(): void {
    console.log(this.inputValue);
  }
  ngAfterViewInit(): void {
    console.log(this.inputValue);
  }
  onClick() {
    if (this.inputValue.nativeElement.value) {
      this.divTrue = true;
      this.divFalse = false;
      console.log(this.inputValue.nativeElement.value);
      this.name = this.inputValue.nativeElement.value;
    } else {
      this.divFalse = true;
      this.divTrue = false;
    }
  }
}
